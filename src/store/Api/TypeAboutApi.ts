import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './BaseQuery';

export const typeAboutApi = createApi({
  reducerPath: 'typeAboutApi',
  tagTypes: ['TypeAbout'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTypeAbout: builder.query({
      query: () => 'api/type/about',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'TypeAbout', id })),
              { type: 'TypeAbout', id: 'LIST' },
            ]
          : [{ type: 'TypeAbout', id: 'LIST' }],
    }),

    addTypeAbout: builder.mutation({
      query: (body) => ({
        url: 'api/type/about',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TypeAbout'],
    }),

    updateTypeAbout: builder.mutation({
      query: (code: { body: any; id: any }) => ({
        url: `api/type/about/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'TypeAbout', id: arg.id }],
    }),
  }),
});

export const { useGetTypeAboutQuery } = typeAboutApi;
