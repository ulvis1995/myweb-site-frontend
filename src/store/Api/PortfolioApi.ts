import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './BaseQuery';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  tagTypes: ['Portfolio'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => 'api/work',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Portfolio', id })),
              { type: 'Portfolio', id: 'LIST' },
            ]
          : [{ type: 'Portfolio', id: 'LIST' }],
    }),

    addPortfolio: builder.mutation({
      query: (body) => ({
        url: 'api/work',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Portfolio'],
    }),

    updatePortfolio: builder.mutation({
      query: (code: { body: any; id: any }) => ({
        url: `api/work/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'Portfolio', id: arg.id }],
    }),

    deletePortfolio: builder.mutation({
      query: (body) => ({
        url: 'api/work',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: (arg) => [{ type: 'Portfolio', id: arg.id }],
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useAddPortfolioMutation,
  useUpdatePortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioApi;
