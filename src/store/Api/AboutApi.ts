import { createApi } from '@reduxjs/toolkit/query/react';
import type { About } from '../../types/typesApi';
import { baseQuery } from './BaseQuery';

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  tagTypes: ['About'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAbout: builder.query<About[], void>({
      query: () => 'api/about',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'About' as const, id })),
              { type: 'About', id: 'LIST' },
            ]
          : [{ type: 'About', id: 'LIST' }],
    }),

    addAbout: builder.mutation<About, { text: string; type: string }>({
      query: (body) => ({
        url: 'api/about',
        method: 'POST',
        body: { text: body.text, type_about_id: body.type },
      }),
      invalidatesTags: ['About'],
    }),

    updateAbout: builder.mutation<
      About,
      Partial<{ body: { text: string; type: string }; id: string }>
    >({
      query: (code: { body: { text: string; type: string }; id: string }) => ({
        url: `api/about/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'About', id: arg?.id }],
    }),

    deleteAbout: builder.mutation<About, { id: string }>({
      query: (body) => ({
        url: 'api/about',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: (arg) => [{ type: 'About', id: arg?.id }],
    }),
  }),
});

export const {
  useGetAboutQuery,
  useAddAboutMutation,
  useUpdateAboutMutation,
  useDeleteAboutMutation,
} = aboutApi;
