import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Category from '../components/Category';
import Pizza from '../components/Pizza';

const MainPage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [scroll, setScroll] = useState(false);

  // Получение данных
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://62487b92831c69c687c4c28f.mockapi.io/pizzas?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }`,
      );
      setPizzas(res.data);
    }
    fetchData();
  }, [categoryId, searchValue]);

  // Отслеживание скролла для header
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setScroll(window.pageYOffset > 100));
    }
  }, []);

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} scroll={scroll} />
      <Category categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
      <div className="flex flex-wrap w-[1200px] h-max bg-gray mx-auto mt-[44px] mb-10 rounded-[40px] p-10 min-h-[1000px]">
        {pizzas
          .filter((obj) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((obj) => (
            <Pizza key={obj.id} pizzas={obj} />
          ))}
      </div>
    </div>
  );
};

export default MainPage;
