import { createApi } from '@reduxjs/toolkit/query/react';
import type { Project } from '../../types/typesApi';
import { baseQuery } from './BaseQuery';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  tagTypes: ['Portfolio'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPortfolio: builder.query<Project[], void>({
      query: () => 'api/work',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Portfolio' as const, id })),
              { type: 'Portfolio', id: 'LIST' },
            ]
          : [{ type: 'Portfolio', id: 'LIST' }],
    }),

    addPortfolio: builder.mutation<Project, FormData>({
      query: (body) => ({
        url: 'api/work',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Portfolio'],
    }),

    updatePortfolio: builder.mutation<
      Project,
      Partial<{ body: FormData; id: string }> & Pick<{ body: FormData; id: string }, 'id'>
    >({
      query: (code: { body: FormData; id: string }) => ({
        url: `api/work/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'Portfolio', id: arg?.id }],
    }),

    deletePortfolio: builder.mutation<Project, { id: string }>({
      query: (body) => ({
        url: 'api/work',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: (arg) => [{ type: 'Portfolio', id: arg?.id }],
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useAddPortfolioMutation,
  useUpdatePortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioApi;
