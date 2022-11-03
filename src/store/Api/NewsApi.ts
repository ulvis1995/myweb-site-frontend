import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './BaseQuery';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  tagTypes: ['News'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => 'api/news',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }: any) => ({ type: 'News', id })), { type: 'News', id: 'LIST' }]
          : [{ type: 'News', id: 'LIST' }],
    }),

    addNews: builder.mutation({
      query: (body) => ({
        url: 'api/news',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['News'],
    }),

    updateNews: builder.mutation({
      query: (code: { body: any; id: any }) => ({
        url: `api/news/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'News', id: arg.id }],
    }),

    deleteNews: builder.mutation({
      query: (body) => ({
        url: 'api/news',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: (arg) => [{ type: 'News', id: arg.id }],
    }),
  }),
});

export const { useGetNewsQuery, useAddNewsMutation, useUpdateNewsMutation, useDeleteNewsMutation } =
  newsApi;
