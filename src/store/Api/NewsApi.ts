import { createApi } from '@reduxjs/toolkit/query/react';
import type { News } from '../../types/typesApi';
import { baseQuery } from './BaseQuery';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  tagTypes: ['News'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getNews: builder.query<News[], void>({
      query: () => 'api/news',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'News' as const, id })),
              { type: 'News', id: 'LIST' },
            ]
          : [{ type: 'News', id: 'LIST' }],
    }),

    addNews: builder.mutation<News, FormData>({
      query: (body) => ({
        url: 'api/news',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['News'],
    }),

    updateNews: builder.mutation<
      News,
      Partial<{ body: FormData; id: string }> & Pick<{ body: FormData; id: string }, 'id'>
    >({
      query: (code: { body: FormData; id: string }) => ({
        url: `api/news/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'News', id: arg?.id }],
    }),

    deleteNews: builder.mutation<News, { id: string }>({
      query: (body) => ({
        url: 'api/news',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: (arg) => [{ type: 'News', id: arg?.id }],
    }),
  }),
});

export const { useGetNewsQuery, useAddNewsMutation, useUpdateNewsMutation, useDeleteNewsMutation } =
  newsApi;
