import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from '../api/pizzaApiTypes';
import { ICartSlice } from './types/cartSliceTypes';

const initialState: ICartSlice = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<IPizza>) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removePizza(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
