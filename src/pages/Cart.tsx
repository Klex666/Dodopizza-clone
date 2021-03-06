import React from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../components/CartItem';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const { clearCart } = useActions();
  const { items, totalPrice } = useTypedSelector((state) => state.cartReducer);

  return (
    <div className="w-[1300px] h-full min-h-[840px] bg-white mx-auto mt-[60px] pb-[10px] rounded-[40px]">
      {items.length > 0 ? (
        <div className="ml-[79px] flex flex-wrap items-start pt-[120px]">
          <div className="cursor-pointer mt-3.5 mr-2" onClick={() => navigate(-1)}>
            <img src="/cart/right-arrow.svg" alt="Arrow" />
          </div>
          <h1 className="font-['Nunito'] font-black text-[50px]">Корзина</h1>
          <div
            className="font-['Nunito'] font-extralight text-[20px] ml-[10px] mt-7 hover:scale-[1.03] duration-200 cursor-pointer"
            onClick={() => clearCart()}>
            Очистить корзину
          </div>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="font-['Nunito'] font-semibold text-[23px] mt-32">
            Всего товаров {items.length} шт.
          </div>
          <div className="font-['Nunito'] font-semibold text-[23px] mt-32 ml-[600px]">
            Сумма заказа: {totalPrice}
          </div>
          <button className="w-[200px] h-[60px] bg-black rounded-[40px] text-white text-[20px] font-['Nunito'] font-black mt-4">
            Оплатить
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap flex-col content-center items-center pt-[302px]">
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
              className="w-[200px] h-[60px] bg-black rounded-[40px] text-white text-[20px] font-['Nunito'] font-black"
              onClick={() => navigate(-1)}>
              Вернуться назад
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
