import { createApi } from '@reduxjs/toolkit/query/react';
import type { AboutType, ContactsType, ProjectType } from '../../types/typesApi';
import { baseQuery } from './BaseQuery';

export const typeApi = createApi({
  reducerPath: 'typeApi',
  tagTypes: ['TypeAbout', 'TypeProject', 'TypeContacts'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTypeAbout: builder.query<AboutType[], void>({
      query: () => 'api/type/about',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'TypeAbout' as const, id })),
              { type: 'TypeAbout', id: 'LIST' },
            ]
          : [{ type: 'TypeAbout', id: 'LIST' }],
    }),

    addTypeAbout: builder.mutation<AboutType, void>({
      query: (body) => ({
        url: 'api/type/about',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TypeAbout'],
    }),

    updateTypeAbout: builder.mutation<AboutType, Partial<AboutType> & Pick<AboutType, 'id'>>({
      query: (code: { body: AboutType; id: string }) => ({
        url: `api/type/about/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'TypeAbout', id: arg?.id }],
    }),
    getTypeProject: builder.query<ProjectType[], void>({
      query: () => 'api/type/project',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'TypeProject' as const, id })),
              { type: 'TypeProject', id: 'LIST' },
            ]
          : [{ type: 'TypeProject', id: 'LIST' }],
    }),

    addTypeProject: builder.mutation<ProjectType, void>({
      query: (body) => ({
        url: 'api/type/project',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TypeProject'],
    }),

    updateTypeProject: builder.mutation<
      ProjectType,
      Partial<ProjectType> & Pick<ProjectType, 'id'>
    >({
      query: (code: { body: ProjectType; id: string }) => ({
        url: `api/type/project/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'TypeProject', id: arg?.id }],
    }),
    getTypeContacts: builder.query<ContactsType[], void>({
      query: () => 'api/type/contacts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'TypeContacts' as const, id })),
              { type: 'TypeContacts', id: 'LIST' },
            ]
          : [{ type: 'TypeContacts', id: 'LIST' }],
    }),

    addTypeContacts: builder.mutation<ContactsType, void>({
      query: (body) => ({
        url: 'api/type/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TypeContacts'],
    }),

    updateTypeContacts: builder.mutation<
      ContactsType,
      Partial<ContactsType> & Pick<ContactsType, 'id'>
    >({
      query: (code: { body: ContactsType; id: string }) => ({
        url: `api/type/contacts/${code.id}`,
        method: 'PATCH',
        body: code.body,
      }),
      invalidatesTags: (arg) => [{ type: 'TypeContacts', id: arg?.id }],
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
