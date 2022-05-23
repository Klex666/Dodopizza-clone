import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
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

export const { addPizza, removePizza, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
