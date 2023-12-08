import { baseApi } from './baseApi';

import { RegisterStatus } from '../types/common';

export const registerStatusApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegisterStatus: builder.query<RegisterStatus, void>({
      query: () => `/registerStatus`,
      providesTags: ['registerStatus'],
      transformResponse: (res: { registerStatus: RegisterStatus }) => res.registerStatus
    }),
    setRegisterStatus: builder.mutation<{ registerStatus: RegisterStatus }, RegisterStatus>({
      query: (registerStatus) => ({
        url: `/registerStatus`,
        body: { registerStatus },
        method: 'POST'
      }),
      invalidatesTags: ['registerStatus']
    })
  })
});

export const { useGetRegisterStatusQuery, useSetRegisterStatusMutation } = registerStatusApi;
