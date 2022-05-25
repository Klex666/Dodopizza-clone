import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import Category from '../components/Category';
import Pizza from '../components/Pizza';

import { useGetPizzasByCategoryQuery } from '../redux/api/pizzaApi';
import { setCategoryId } from '../redux/slices/categorySlice';
import { setScroll } from '../redux/slices/scrollSlice';

const MainPage = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.categoryReducer.categoryId);
  const searchValue = useSelector((state) => state.searchReducer.searchValue);

  const { data, isLoading } = useGetPizzasByCategoryQuery(categoryId);

  // Отслеживание скролла для header
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => dispatch(setScroll(window.pageYOffset > 100)));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Category onClickCategory={(id) => dispatch(setCategoryId(id))} />
      <div className="flex flex-wrap w-[1200px] h-max bg-gray mx-auto mt-[44px] mb-10 rounded-[40px] p-10 min-h-[1000px]">
        {isLoading
          ? []
          : data
              .filter((obj) => {
                if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((obj) => <Pizza key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default MainPage;
