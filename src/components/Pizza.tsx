import { useActions } from '../hooks/useActions';
import { IPizza } from '../redux/api/pizzaApiTypes';

const Pizza: React.FC<IPizza> = ({ id, title, image, description, price }) => {
  const { addPizza } = useActions();

  const item = {
    id,
    title,
    image,
    description,
    price,
  };

  return (
    <>
      <article className="w-[300px] h-[400px] ml-10 mt-6 mb-14 bg-black rounded-[40px] pt-1.5 hover:scale-[1.05] duration-75">
        <main>
          <img src={image} alt="Pizza" width={232} height={232} className="mx-auto" />
          <div className="text-[20px] font-bold text-white ml-2 font-['Nunito']">{title}</div>
          <div className="font-extralight text-white ml-2 text-xs h-[80px] font-['Nunito']">
            {description}
          </div>
        </main>
        <footer className="h-max flex place-items-end ml-2">
          <div className="flex place-items-end h-full text-[20px] float-left text-white ml-2 font-['Nunito'] font-semibold">
            от {price}₽
          </div>
          <button
            onClick={() => addPizza(item)}
            className="w-[120px] h-[40px] flex ml-20 bg-white rounded-full float-right items-center pl-[25px] text-orange-black font-bold font-['Nunito']">
            Выбрать
          </button>
        </footer>
      </article>
    </>
  );
};

export default Pizza;
