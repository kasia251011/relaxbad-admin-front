import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const QUIZ_TYPE_HEADER = 'X-Quiz-Type';

console.log(import.meta.env.API_URL);

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  tagTypes: ['group', 'user'],
  endpoints: () => ({})
});
