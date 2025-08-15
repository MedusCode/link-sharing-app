import { get, set } from 'idb-keyval';

export type UserRecord = {
  id: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  img: string | null;
  createdAt: number;
};

export type SessionRecord = {
  token: string;
  userId: string;
  createdAt: number;
};

const USERS_KEY = 'auth_users';
const SESSIONS_KEY = 'auth_sessions';

async function readUsers(): Promise<UserRecord[]> {
  return (await get<UserRecord[]>(USERS_KEY)) ?? [];
}

async function writeUsers(list: UserRecord[]) {
  await set(USERS_KEY, list);
}

async function readSessions(): Promise<SessionRecord[]> {
  return (await get<SessionRecord[]>(SESSIONS_KEY)) ?? [];
}

async function writeSessions(list: SessionRecord[]) {
  await set(SESSIONS_KEY, list);
}

export async function sha256(text: string): Promise<string> {
  const enc = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function findUserByEmail(email: string) {
  const users = await readUsers();
  return users.find(user => user.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export async function createUser(data: Omit<UserRecord, 'id' | 'createdAt' | 'passwordHash'> & { password: string }) {
  const users = await readUsers();
  const exists = users.some(user => user.email.toLowerCase() === data.email.toLowerCase());
  if (exists) throw new Error('EMAIL_EXISTS');

  const newUser: UserRecord = {
    id: crypto.randomUUID(),
    email: data.email,
    passwordHash: await sha256(data.password),
    firstName: data.firstName,
    lastName: data.lastName,
    img: data.img ?? null,
    createdAt: Date.now(),
  };

  await writeUsers([...users, newUser]);
  return newUser;
}

export async function verifyUser(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user) return null;
  const ok = (await sha256(password)) === user.passwordHash;
  return ok ? user : null;
}

export async function createSession(userId: string) {
  const sessions = await readSessions();
  const token = crypto.randomUUID();
  const newSession: SessionRecord = { token, userId, createdAt: Date.now() };
  await writeSessions([newSession, ...sessions]);
  return newSession;
}

export async function getUserByToken(token: string) {
  const [sessions, users] = await Promise.all([readSessions(), readUsers()]);
  const session = sessions.find(session => session.token === token);
  if (!session) return null;
  const user = users.find(user => user.id === session.userId) ?? null;
  return user;
}

export async function invalidateToken(token: string) {
  const sessions = await readSessions();
  const next = sessions.filter(session => session.token !== token);
  await writeSessions(next);
}

export function toPublicUser(user: UserRecord) {
  const { passwordHash, ...safe } = user;
  return safe;
}
