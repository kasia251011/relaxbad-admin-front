import { baseApi } from './baseApi';
import { GROUP_NULL_ERR } from './errorMessages';

import { GroupType, Id } from '../types/common';
import { Double, DoubleWithoutId } from '../types/Group';

export const doublesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDoubleById: builder.query<Double, { id: Id }>({
      query: ({ id }) => {
        if (!id) throw new Error(GROUP_NULL_ERR);
        return `/doubles/${id}`;
      },
      providesTags: ['doubles']
    }),
    getDoubles: builder.query<Double[], { groupId?: Id }>({
      query: ({ groupId }) => `/doubles/${groupId ? `?groupId=${groupId}` : ''}`,
      providesTags: ['doubles']
    }),
    removeDoubleById: builder.mutation<Double, { id: Id; groupType: GroupType }>({
      query: ({ id, groupType }) => ({
        url: `/doubles/${id}?groupType=${groupType}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['doubles', 'user']
    }),
    addDouble: builder.mutation<Double, { double: DoubleWithoutId; groupType: GroupType }>({
      query: ({ double, groupType }) => ({
        url: `/doubles?groupType=${groupType}`,
        method: 'POST',
        body: double
      }),
      invalidatesTags: ['doubles', 'user']
    })
  })
});

export const {
  useAddDoubleMutation,
  useGetDoubleByIdQuery,
  useGetDoublesQuery,
  useRemoveDoubleByIdMutation
} = doublesApi;
