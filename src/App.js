import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Category from './components/Category';
import Pizza from './components/Pizza';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://62487b92831c69c687c4c28f.mockapi.io/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
      });
  });

  return (
    <div className="App">
      <Header />
      <Category />
      <div className="flex flex-wrap w-[1200px] h-full bg-gray mx-auto mt-[44px] mb-10 rounded-[40px] p-10">
        {pizzas.map((obj) => {
          <Pizza key={obj.id} pizzas={obj} />;
        })}
      </div>
    </div>
  );
}

export default App;
