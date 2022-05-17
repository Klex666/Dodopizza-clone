import React from 'react';

const Pizza = ({ id, title, image, price, description }) => {
  return (
    <>
      <article className="w-[300px] h-[400px] ml-10 mt-6 mb-14 bg-black rounded-[40px] pt-1.5">
        <main>
          <img src="/pizzaList/1.png" alt="Pizza" width={232} height={232} className="mx-auto" />
          <div className="text-[20px] font-bold text-white ml-2">{title}</div>
          <div className="font-light text-white ml-2">Ветчина, моцарелла, соус альфредо</div>
        </main>
        <footer className="h-24 flex place-items-end">
          <div className="flex place-items-end h-full font-normal text-[20px] float-left text-white ml-2">
            от 339₽
          </div>
          <button className="w-[120px] h-[40px] flex ml-20 bg-white rounded-full float-right items-center pl-[25px] text-orange-black font-bold">
            Выбрать
          </button>
        </footer>
      </article>
    </>
  );
};

export default Pizza;
