import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPizza } from './pizzaApiTypes';

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62487b92831c69c687c4c28f.mockapi.io' }),
  endpoints: (builder) => ({
    getPizzasByCategory: builder.query<IPizza[], number>({
      query: (categoryId: number) => `/pizzas?${categoryId > 0 ? `category=${categoryId}` : ''}`,
    }),
  }),
});

export const { useGetPizzasByCategoryQuery } = pizzaApi;
