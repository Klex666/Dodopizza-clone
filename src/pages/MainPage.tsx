import { useEffect } from 'react';

import Header from '../components/Header';
import Category from '../components/Category';
import Pizza from '../components/Pizza';

import { useGetPizzasQuery } from '../redux/api/pizzaApi';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const MainPage: React.FC = () => {
  const { setCategoryId, setScroll } = useActions();

  const { categoryId } = useTypedSelector((state) => state.categoryReducer);
  const { searchValue } = useTypedSelector((state) => state.searchReducer);

  const { data: pizza } = useGetPizzasQuery(categoryId);

  // Отслеживание скролла для header
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setScroll(window.pageYOffset > 100));
    }
  }, [setScroll]);

  return (
    <div className="App">
      <Header />
      <Category onClickCategory={(id: number) => setCategoryId(id)} />
      <div className="flex flex-wrap w-[1200px] h-max bg-gray mx-auto mt-[44px] mb-10 rounded-[40px] p-10 min-h-[1000px]">
        {pizza
          ? pizza
              .filter((obj) => {
                if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((obj) => <Pizza key={obj.id} {...obj} />)
          : null}
      </div>
    </div>
  );
};

export default MainPage;
