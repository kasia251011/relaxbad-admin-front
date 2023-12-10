import { baseApi } from './baseApi';

export interface ScheduleForm {
  startDate: string;
  courtCount: number;
  startTime: string;
  endTime: string;
}

export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getSchedule: builder.query<RegisterStatus, void>({
    //   query: () => `/registerStatus`,
    //   providesTags: ['registerStatus'],
    //   transformResponse: (res: { registerStatus: RegisterStatus }) => res.registerStatus
    // }),
    generateSchedule: builder.mutation<unknown, ScheduleForm>({
      query: (scheduleForm) => ({
        url: `/schedule`,
        body: scheduleForm,
        method: 'POST'
      })
    })
  })
});

export const { useGenerateScheduleMutation } = scheduleApi;
