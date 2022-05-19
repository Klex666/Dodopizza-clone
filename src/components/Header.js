import { Link } from 'react-router-dom';

const Header = ({ searchValue, setSearchValue, scroll }) => {
  return (
    <div className="w-[1300px] h-[200px] mx-auto mt-6 sticky top-0">
      {/* Logo dodopizza */}
      <div
        className={
          scroll
            ? 'w-[300px] h-[175px] bg-white rounded-[40px] flex-wrap float-left hidden'
            : 'flex w-[300px] h-[175px] bg-white rounded-[40px] flex-wrap float-left'
        }>
        <a href="!#">
          <img src="/header/dodoBLACK.png" alt="Logo" width={170} height={170} className="flex" />
        </a>
        <div className="mt-8">
          <div className="flex text-[35px]">DODO</div>
          <div className="flex text-[35px]">PIZZA</div>
        </div>
      </div>
      {/* Navigation */}
      <div
        className={
          scroll
            ? 'w-[1300px] h-[120px] bg-white rounded-[40px]'
            : 'w-[950px] h-[120px] bg-white rounded-[40px] float-right mt-7'
        }>
        <div className="float-left w-[400px] h-[70px] bg-black rounded-[25px] mt-7 ml-[83px] mr-0">
          <img
            src="/header/search-icon.png"
            alt="Search-icon"
            className="pt-4 pl-4 flex float-left"
            width={50}
            height={50}
          />
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Поиск..."
            className="flex float-right mt-3 mr-2 text-[20px] w-[340px] h-[50px] bg-black text-white"
          />
        </div>
        {/* Cart */}
        <button className="h-[60px] w-[170px] flex float-right bg-black mr-[39px] mt-[30px] rounded-[30px] text-white pt-2.5 pl-8 text-[25px]">
          <Link to="cart">Корзина</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
