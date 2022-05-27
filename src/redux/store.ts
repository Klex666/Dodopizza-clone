import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';
import scrollReducer from './slices/scrollSlice';
import { pizzaApi } from './api/pizzaApi';

export const store = configureStore({
  reducer: {
    categoryReducer,
    cartReducer,
    searchReducer,
    scrollReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzaApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
