import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[1300px] h-[840px] bg-white mx-auto mt-[60px] rounded-[40px] pt-[302px]">
      <div className="flex flex-wrap flex-col content-center items-center">
        <img src="/cart/kitty.svg" alt="Kitty" className="flex" height={40} width={40} />
        <div className="flex text-[35px] font-['Nunito'] font-extrabold">Корзина пуста</div>
        <div className="font-['Nunito'] font-light text-[25px]">
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </div>
        <div className="mt-[77px]">
          <img
            onClick={() => navigate(-1)}
            src="/cart/right-arrow.svg"
            alt="Arrow"
            className="flex float-left mt-2 mr-5"
          />
          <button
            className="w-[200px] h-[60px] bg-black rounded-[40px] text-white text-[20px] font-['Nunito']font-black"
            onClick={() => navigate(-1)}>
            Вернуться назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
