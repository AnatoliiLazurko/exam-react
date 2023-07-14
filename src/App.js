import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Category from './components/Category/Category';
import { BasketProvider } from './contexts/BasketContext';
import Basket from './components/Basket/Basket';

function App() {
  return (
    <>
      <BasketProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </BasketProvider>
    </>
  );
}

export default App;
