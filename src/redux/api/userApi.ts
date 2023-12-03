import { baseApi } from './baseApi';
import { USER_NULL_ERR } from './errorMessages';

import { Gender, Id } from '../types/common';
import { User, UserWithoutId } from '../types/Player';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => `/users`,
      providesTags: ['user']
    }),
    getAllUsersAvailableForMix: builder.query<User[], { gender?: Gender }>({
      query: ({ gender }) => `/users/availableForMix${gender ? `?gender=${gender}` : ''}`,
      providesTags: ['user']
    }),
    getAllUsersAvailableForDouble: builder.query<User[], { gender?: Gender }>({
      query: ({ gender }) => `/users/availableForDouble${gender ? `?gender=${gender}` : ''}`,
      providesTags: ['user']
    }),
    getAllUsersAvailableForSingle: builder.query<User[], { gender?: Gender }>({
      query: ({ gender }) => `/users/availableForSingle${gender ? `?gender=${gender}` : ''}`,
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
        if (!id) throw new Error(USER_NULL_ERR);
        return `/users/${id}`;
      },
      providesTags: ['user']
    })
  })
});

export const {
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetAllUsersAvailableForDoubleQuery,
  useGetAllUsersAvailableForMixQuery,
  useGetAllUsersAvailableForSingleQuery,
  useGetUserByIdQuery,
  useSuspendAccountByIdMutation,
  useUpdateUserMutation
} = userApi;
