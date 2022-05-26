import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { cartActions } from '../redux/slices/cartSlice';
import { categoryActions } from '../redux/slices/categorySlice';
import { scrollActions } from '../redux/slices/scrollSlice';
import { searchActions } from '../redux/slices/searchSlice';

const allActions = {
  ...cartActions,
  ...categoryActions,
  ...scrollActions,
  ...searchActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
