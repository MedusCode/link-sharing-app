// src/mocks/handlers-auth.ts
import { http, HttpResponse } from 'msw';

import {
  createSession,
  createUser,
  findUserByEmail,
  getUserByToken,
  invalidateToken,
  toPublicUser,
  verifyUser
} from './auth-db';

const pendingSignupEmails = new Set<string>();

const API = '/api';
const bearer = (req: Request) => {
  const h = req.headers.get('authorization') || req.headers.get('Authorization');
  const m = h && /^Bearer\s+(.+)$/.exec(h);
  return m ? m[1] : null;
};

export const authHandlers = [
  http.post(`${API}/auth/signup`, async ({ request }) => {
    try {
      const { email, password } = (await request.json()) as { email: string; password: string };
      if (!email || !password) {
        return HttpResponse.json({ message: 'email and password are required' }, { status: 400 });
      }

      const key = email.toLowerCase();
      if (pendingSignupEmails.has(key)) {
        return HttpResponse.json({ message: 'Please retry' }, { status: 429 });
      }

      pendingSignupEmails.add(key);
      try {
        const exists = await findUserByEmail(email);
        if (exists) {
          return HttpResponse.json({ message: 'Email already registered' }, { status: 409 });
        }
        const user = await createUser({ email, password, firstName: '', lastName: '', img: null });
        const session = await createSession(user.id);
        return HttpResponse.json({ user: toPublicUser(user), token: session.token }, { status: 201 });
      } finally {
        pendingSignupEmails.delete(key);
      }
    } catch {
      return HttpResponse.json({ message: 'Invalid payload' }, { status: 400 });
    }
  }),

  http.post(`${API}/auth/login`, async ({ request }) => {
    try {
      const body = (await request.json()) as { email: string; password: string };
      const user = await verifyUser(body.email, body.password);
      if (!user) return HttpResponse.json({ message: 'Invalid email or password' }, { status: 401 });
      const session = await createSession(user.id);
      return HttpResponse.json({ user: toPublicUser(user), token: session.token }, { status: 200 });
    } catch {
      return HttpResponse.json({ message: 'Invalid payload' }, { status: 400 });
    }
  }),

  http.post(`${API}/auth/logout`, async ({ request }) => {
    const token = bearer(request);
    if (token) await invalidateToken(token);
    return HttpResponse.json({ ok: true }, { status: 200 });
  }),

  http.get(`${API}/auth/me`, async ({ request }) => {
    const token = bearer(request);
    if (!token) return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
    const user = await getUserByToken(token);
    if (!user) return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
    return HttpResponse.json({ user: toPublicUser(user) }, { status: 200 });
  }),
];
