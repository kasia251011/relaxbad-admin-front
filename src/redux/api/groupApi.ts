import { baseApi } from './baseApi';
import { GROUP_NULL_ERR } from './errorMessages';

import { GroupType, Id, RecordType } from '../types/common';
import { Double, Group, GroupWithoutId, Single } from '../types/Group';

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
      invalidatesTags: ['group']
    }),
    getGroupById: builder.query<Group, Id>({
      query: (id) => {
        if (!id) throw new Error(GROUP_NULL_ERR);
        return `/groups/${id}`;
      },
      providesTags: ['group']
    }),
    getRecordById: builder.query<Double & Single, { id: Id; recordType: RecordType }>({
      query: ({ id, recordType }) => {
        if (!id) throw new Error(GROUP_NULL_ERR);
        return `/${recordType}/${id}`;
      },
      providesTags: ['record']
    }),
    getRecords: builder.query<Double[] & Single[], { recordType: RecordType; groupId?: Id }>({
      query: ({ recordType, groupId }) => `/${recordType}/${groupId ? `?groupId=${groupId}` : ''}`,
      providesTags: ['record']
    }),
    removeRecordById: builder.mutation<
      Double & Single,
      { id: Id; recordType: RecordType; groupType: GroupType }
    >({
      query: ({ id, recordType, groupType }) => ({
        url: `/${recordType}/${id}?groupType=${groupType}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['record', 'user']
    }),
    updateRecordById: builder.mutation<
      Double & Single,
      { id: Id; recordType: RecordType; record: Double | Single }
    >({
      query: ({ id, recordType, record }) => ({
        url: `/${recordType}/${id}`,
        method: 'PUT',
        body: record
      }),
      invalidatesTags: ['record']
    }),
    addRecord: builder.mutation<
      Double & Single,
      { recordType: RecordType; record: Double | Single; groupType: GroupType }
    >({
      query: ({ recordType, record, groupType }) => ({
        url: `/${recordType}?groupType=${groupType}`,
        method: 'POST',
        body: record
      }),
      invalidatesTags: ['record', 'user']
    })
  })
});

export const {
  useGetAllGroupsQuery,
  useGetGroupByIdQuery,
  useAddGroupsMutation,
  useAddRecordMutation,
  useUpdateRecordByIdMutation,
  useGetRecordByIdQuery,
  useRemoveRecordByIdMutation,
  useGetRecordsQuery
} = groupApi;
