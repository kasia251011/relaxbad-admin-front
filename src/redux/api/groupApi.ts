import { baseApi } from './baseApi';
import { GROUP_NULL_ERR } from './errorMessages';

import { Id } from '../types/common';
import { Group } from '../types/Group';

export const groupApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGroups: builder.query<Group[], void>({
      query: () => '/groups/',
      providesTags: ['group']
    }),
    addGroup: builder.mutation<Group, Group>({
      query: (group) => ({
        url: '/groups/',
        method: 'POST',
        body: group
      }),
      invalidatesTags: ['group']
    }),
    getGroupById: builder.query<Group, Id>({
      query: (id) => {
        if (!id) throw new Error(GROUP_NULL_ERR);
        return `/groups/${id}`;
      },
      providesTags: ['group']
    }),
    deleteGroupById: builder.mutation<void, Id>({
      query: (id) => {
        if (!id) throw new Error(GROUP_NULL_ERR);

        return {
          url: `/groups/${id}`,
          method: 'DELETE'
        };
      },
      invalidatesTags: ['group']
    }),
    updateGroupById: builder.mutation<Group, Group>({
      query: (group) => {
        if (!group.id) throw new Error(GROUP_NULL_ERR);

        return {
          url: `/groups/${group.id}`,
          method: 'PUT',
          body: group
        };
      },
      invalidatesTags: ['group']
    })
  })
});

export const {
  useGetAllGroupsQuery,
  useGetGroupByIdQuery,
  useAddGroupMutation,
  useDeleteGroupByIdMutation,
  useUpdateGroupByIdMutation
} = groupApi;
