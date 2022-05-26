import React from 'react';

import { useActions } from '../hooks/useActions';
import { IPizza } from '../redux/api/pizzaApiTypes';

const CartItem: React.FC<IPizza> = ({ id, title, image, price }) => {
  const { removePizza } = useActions();

  return (
    <>
      <div className="h-[188px] w-[1000px] bg-black rounded-[40px] mt-[60px] flex">
        <img src={image} alt="Pizza" width={170} height={170} className="mt-3.5 ml-3.5 mb-1" />
        <div className="text-white font-['Nunito'] font-extrabold text-[27px] flex mt-[70px]">
          {title}
        </div>
        <div className="text-white font-['Nunito'] font-extrabold text-[27px] mt-[70px] ml-[400px]">
          {price} ₽{' '}
        </div>
      </div>
      <img
        src="/cart/delete.png"
        alt="Delete"
        height={45}
        width={50}
        className="mt-32 ml-4 hover:scale-[1.1] duration-200 cursor-pointer"
        onClick={() => removePizza(id)}
      />
    </>
  );
};

export default CartItem;
