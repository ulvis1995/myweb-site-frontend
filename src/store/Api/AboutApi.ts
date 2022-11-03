import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './BaseQuery';

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  tagTypes: ['About'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => 'api/about',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }: any) => ({ type: 'About', id })), { type: 'About', id: 'LIST' }]
          : [{ type: 'About', id: 'LIST' }],
    }),

    addAbout: builder.mutation({
      query: (body) => ({
        url: 'api/about',
        method: 'POST',
        body: { text: body.text, type_about_id: body.type },
      }),
      invalidatesTags: ['About'],
    }),

    updateAbout: builder.mutation({
      query: (code: { body: any; id: any }) => ({
        url: `api/about/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'About', id: arg.id }],
    }),

    deleteAbout: builder.mutation({
      query: (body) => ({
        url: 'api/about',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: (arg) => [{ type: 'About', id: arg.id }],
    }),
  }),
});

export const {
  useGetAboutQuery,
  useAddAboutMutation,
  useUpdateAboutMutation,
  useDeleteAboutMutation,
} = aboutApi;
