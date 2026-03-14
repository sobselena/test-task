import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../../types/user';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://69b534c8be587338e7154cca.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => ({ url: 'users' }),
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
