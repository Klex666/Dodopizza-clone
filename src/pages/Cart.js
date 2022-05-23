import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../components/CartItem';
import { clearCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);

  return (
    <div className="w-[1300px] h-full min-h-[840px] bg-white mx-auto mt-[60px] pb-[10px] rounded-[40px]">
      {items.length > 0 ? (
        <div className="ml-[79px] flex flex-wrap items-start pt-[120px]">
          <h1 className="font-['Nunito'] font-black text-[50px]">Корзина</h1>
          <div
            className="font-['Nunito'] font-extralight text-[20px] ml-[10px] mt-7 hover:scale-[1.03] duration-200 cursor-pointer"
            onClick={() => dispatch(clearCart())}>
            Очистить корзину
          </div>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="font-['Nunito'] font-semibold text-[23px] mt-32">
            {items.length > 1
              ? `${items.length} пиццы на сумму ${totalPrice} ₽`
              : `${items.length} пицца на сумму ${totalPrice} ₽`}
          </div>
          <button
            className="w-[200px] h-[70px] bg-black rounded-[40px] text-white text-[20px] font-['Nunito'] font-black mt-48"
            onClick={() => navigate(-1)}>
            Вернуться назад
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
