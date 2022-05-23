import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Header from '../components/Header';
import Category from '../components/Category';
import Pizza from '../components/Pizza';

import { setCategoryId } from '../redux/slices/categorySlice';
import { setPizzas } from '../redux/slices/pizzaSlice';

const MainPage = () => {
  const categoryId = useSelector((state) => state.categoryReducer.categoryId);
  const searchValue = useSelector((state) => state.searchReducer.searchValue);
  const pizzas = useSelector((state) => state.pizzaReducer.pizzas);

  const dispatch = useDispatch();

  const [scroll, setScroll] = useState(false);

  // Получение данных
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://62487b92831c69c687c4c28f.mockapi.io/pizzas?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }`,
      );
      dispatch(setPizzas(data));
    }
    fetchData();
  }, [categoryId, searchValue, dispatch]);

  // Отслеживание скролла для header
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setScroll(window.pageYOffset > 100));
    }
  }, []);

  return (
    <div className="App">
      <Header scroll={scroll} />
      <Category categoryId={categoryId} onClickCategory={(id) => dispatch(setCategoryId(id))} />
      <div className="flex flex-wrap w-[1200px] h-max bg-gray mx-auto mt-[44px] mb-10 rounded-[40px] p-10 min-h-[1000px]">
        {pizzas
          .filter((obj) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((obj) => (
            <Pizza key={obj.id} {...obj} />
          ))}
      </div>
    </div>
  );
};

export default MainPage;
