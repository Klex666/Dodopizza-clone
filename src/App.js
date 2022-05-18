import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
