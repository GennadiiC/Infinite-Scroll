// rtk query setup for fetching data from json-server
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const scrollApi = createApi({
  reducerPath: 'scrollApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['People'],
  endpoints: builder => ({
    // fetching 'people' array by parts for implementing infinite scroll
    getPeopleByPage: builder.query({
      query: (query) => `people?_limit=${query}`,
      providesTags: ['People']
    }), 
    // fetching whole 'people' array for purpose of testing
    getPeople: builder.query({
      query: () => `people`,
      transformResponse: (response) => {
        let temp = response[0]
        response[0] = response[response.length -1]
        response[1] = temp
        return response.map((person, i) => ({ ...person, id: i }))
      },
      providesTags: ['People']
    }),
    // adding data from form to json-server
    addNewPerson: builder.mutation({
      query: (person) => ({
        url: 'people',
        method: 'POST',
        body: person
      }),
      invalidatesTags: ['People']
    })
  })
})

export const { useGetPeopleByPageQuery, useGetPeopleQuery, useAddNewPersonMutation } = scrollApi