import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    categoryReducer,
    cartReducer,
    searchReducer,
  },
});
