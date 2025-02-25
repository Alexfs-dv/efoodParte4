import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiRestaurants } from '../pages/Home';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getApiRestaurants: builder.query<ApiRestaurants, void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetApiRestaurantsQuery } = api;

export default api

