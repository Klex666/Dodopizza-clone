import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scroll: false,
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScroll(state, action) {
      state.scroll = action.payload;
    },
  },
});

export const scrollActions = scrollSlice.actions;

export default scrollSlice.reducer;
