import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../../types/user';
import { singleToast } from '../../utils/single-toast';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://69b534c8be587338e7154cca.mockapi.io/',
  }),

  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => ({ url: 'users' }),
      providesTags: ['Users'],
    }),
    deleteUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),

      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          singleToast(`Вжух и сотрудник внезапно бесследно исчез (˶ᵔ ᵕ ᵔ˶)`, 'success');
        } catch {
          singleToast('Партия не смогла избавиться от сотрудника ( •̀ ᴖ •́ )', 'error');
        }
      },

      invalidatesTags: ['Users'],
    }),
    createUser: builder.mutation<void, Omit<User, 'id'>>({
      query: (userData) => ({
        url: `users`,
        method: 'POST',
        body: userData,
      }),

      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          singleToast('У вас появился новый сотрудник, получается ฅᨐฅ');
        } catch {
          singleToast('Нe базированный сотрудник, получается (╥﹏╥)');
        }
      },

      invalidatesTags: ['Users'],
    }),
    editUser: builder.mutation<void, User>({
      query: (userData) => ({
        url: `users/${userData.id}`,
        method: 'PUT',
        body: userData,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          singleToast('Изменили данные сотрудника (˶˃⤙˂˶)');
        } catch {
          singleToast('Сотрудник на консерваторе (..◜ᴗ◝..)');
        }
      },
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useEditUserMutation,
} = usersApi;
