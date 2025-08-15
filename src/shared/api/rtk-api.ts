import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getToken } from '@shared/api/auth';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Auth', 'Profile'],
  endpoints: () => ({}),
});
