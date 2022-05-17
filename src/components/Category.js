import React, { useState } from 'react';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Острые', 'Сладкие', 'Овощные', 'Сырные', 'Грибные'];

  return (
    <div className="w-[1200px] h-[515px] bg-gray mx-auto rounded-[40px]">
      <div className="">
        <h1 className="ml-14 pt-4 text-[30px] text-gray-light">Часто заказывают</h1>
        {/* Slider */}
        <div className="flex justify-between mt-[32px] m-28 mb-0">
          <div className="w-[270px] h-[140px] bg-black rounded-[30px]"></div>
          <div className="w-[270px] h-[140px] bg-black rounded-[30px]"></div>
          <div className="w-[270px] h-[140px] bg-black rounded-[30px]"></div>
        </div>
        {/* Category-button */}
        <div className="flex mt-[60px] justify-center h-[200px] w-[900px] flex-wrap mx-auto">
          {categories.map((category, id) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={
                activeCategory === id
                  ? 'w-[150px] h-[60px] rounded-[20px] ml-[59px] text-[23px] bg-white text-black duration-500'
                  : 'w-[150px] h-[60px] bg-black rounded-[20px] ml-[59px] text-white text-[23px]'
              }>
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
<button className="w-[150px] h-[60px] bg-black rounded-[20px] ml-[59px]"></button>;

export default Category;
