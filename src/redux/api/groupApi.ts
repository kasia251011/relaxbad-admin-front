import { baseApi } from './baseApi';
import { GROUP_NULL_ERR } from './errorMessages';

import { GroupType, Id } from '../types/common';
import { Group, GroupWithoutId } from '../types/Group';

export const groupApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGroups: builder.query<Group[], { type?: GroupType }>({
      query: ({ type }) => `/groups${type ? `?type=${type}` : ''}`,
      providesTags: ['group']
    }),
    addGroups: builder.mutation<Group, GroupWithoutId[]>({
      query: (group) => ({
        url: '/groups/',
        method: 'POST',
        body: group
      }),
      invalidatesTags: ['group', 'registerStatus']
    }),
    getGroupById: builder.query<Group, Id>({
      query: (id) => {
        if (!id) throw new Error(GROUP_NULL_ERR);
        return `/groups/${id}`;
      },
      providesTags: ['group']
    })
  })
});

export const { useGetAllGroupsQuery, useGetGroupByIdQuery, useAddGroupsMutation } = groupApi;
