const Pizza = ({ pizzas }) => {
  return (
    <>
      <article className="w-[300px] h-[400px] ml-10 mt-6 mb-14 bg-black rounded-[40px] pt-1.5">
        <main>
          <img src={pizzas.image} alt="Pizza" width={232} height={232} className="mx-auto" />
          <div className="text-[20px] font-bold text-white ml-2">{pizzas.title}</div>
          <div className="font-extralight text-white ml-2 text-xs h-[80px]">
            {pizzas.description}
          </div>
        </main>
        <footer className="h-max flex place-items-end ml-2">
          <div className="flex place-items-end h-full font-normal text-[20px] float-left text-white ml-2">
            от {pizzas.price}₽
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
