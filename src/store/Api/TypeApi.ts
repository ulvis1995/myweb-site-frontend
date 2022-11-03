import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './BaseQuery';

export const typeApi = createApi({
  reducerPath: 'typeApi',
  tagTypes: ['TypeAbout', 'TypeProject', 'TypeContacts'],
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
    getTypeProject: builder.query({
      query: () => 'api/type/project',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'TypeProject', id })),
              { type: 'TypeProject', id: 'LIST' },
            ]
          : [{ type: 'TypeProject', id: 'LIST' }],
    }),

    addTypeProject: builder.mutation({
      query: (body) => ({
        url: 'api/type/project',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TypeProject'],
    }),

    updateTypeProject: builder.mutation({
      query: (code: { body: any; id: any }) => ({
        url: `api/type/project/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'TypeProject', id: arg.id }],
    }),
    getTypeContacts: builder.query({
      query: () => 'api/type/contacts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'TypeContacts', id })),
              { type: 'TypeContacts', id: 'LIST' },
            ]
          : [{ type: 'TypeContacts', id: 'LIST' }],
    }),

    addTypeContacts: builder.mutation({
      query: (body) => ({
        url: 'api/type/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TypeContacts'],
    }),

    updateTypeContacts: builder.mutation({
      query: (code: { body: any; id: any }) => ({
        url: `api/type/contacts/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'TypeContacts', id: arg.id }],
    }),
  }),
});

export const {
  useGetTypeAboutQuery,
  useGetTypeContactsQuery,
  useGetTypeProjectQuery,
  useAddTypeAboutMutation,
  useAddTypeContactsMutation,
  useAddTypeProjectMutation,
  useUpdateTypeAboutMutation,
  useUpdateTypeContactsMutation,
  useUpdateTypeProjectMutation,
} = typeApi;
