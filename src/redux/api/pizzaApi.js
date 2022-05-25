import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62487b92831c69c687c4c28f.mockapi.io' }),
  endpoints: (builder) => ({
    getPizzasByCategory: builder.query({
      query: (categoryId) => `/pizzas?${categoryId > 0 ? `category=${categoryId}` : ''}`,
    }),
  }),
});

export const { useGetPizzasByCategoryQuery } = pizzaApi;
