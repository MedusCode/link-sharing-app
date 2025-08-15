import { clearToken, setToken } from '@shared/api/auth';
import { rtkApi } from '@shared/api/rtk-api';


export type SessionUser = {
  id: string; email: string; firstName: string; lastName: string;
  img: string | null; createdAt: number;
};
export type AuthResponse = { user: SessionUser; token: string };

export const sessionApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<AuthResponse, { email: string; password: string }>({
      query: (body) => ({ url: '/auth/signup', method: 'POST', body }),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled; setToken(data.token);
      },
      invalidatesTags: ['Auth', 'Profile'],
    }),

    login: build.mutation<AuthResponse, { email: string; password: string }>({
      query: (body) => ({ url: '/auth/login', method: 'POST', body }),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled; setToken(data.token);
      },
      invalidatesTags: ['Auth', 'Profile'],
    }),

    me: build.query<{ user: SessionUser }, void>({
      query: () => ({ url: '/auth/me' }),
      providesTags: ['Auth'],
    }),
    
    logout: build.mutation<{ ok: true }, void>({
      query: () => ({ url: '/auth/logout', method: 'POST' }),
      async onQueryStarted(_, { queryFulfilled }) {
        await queryFulfilled; clearToken();
      },
      invalidatesTags: ['Auth', 'Profile'],
    }),
  }),
});

export const {
  useLoginMutation, useSignupMutation, useLogoutMutation, useMeQuery
} = sessionApi;
