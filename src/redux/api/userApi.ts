import { baseApi } from './baseApi';
import { GROUP_NULL_ERR } from './errorMessages';

import { GroupType, Id } from '../types/common';
import { User, UserWithoutId } from '../types/Player';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], { availableFor?: GroupType }>({
      query: ({ availableFor }) => `/users${availableFor ? `?availableFor=${availableFor}` : ''}`,
      providesTags: ['user']
    }),
    addUser: builder.mutation<User, UserWithoutId>({
      query: (user) => ({
        url: '/users/',
        method: 'POST',
        body: { ...user, role: [] } //TODO: get this from form
      }),
      invalidatesTags: ['user']
    }),
    updateUser: builder.mutation<User, { id: Id; user: UserWithoutId }>({
      query: ({ id, user }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: { ...user, role: [] } //TODO: get this from form
      }),
      invalidatesTags: ['user']
    }),
    suspendAccountById: builder.mutation<User, Id>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'PUT'
      }),
      invalidatesTags: ['user']
    }),
    getUserById: builder.query<User, Id>({
      query: (id) => {
        if (!id) throw new Error(GROUP_NULL_ERR);
        return `/users/${id}`;
      },
      providesTags: ['user']
    })
  })
});

export const {
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useSuspendAccountByIdMutation,
  useUpdateUserMutation
} = userApi;
