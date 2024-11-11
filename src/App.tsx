import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from './api/apiRequests';
import { SET_PRODUCTS } from './redux/actions';
import { MainPage } from './comp/mainPage/MainPage';
import { Header } from './comp/header/Header';
import { ProductPage } from './comp/productPage/ProductPage';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        dispatch({ type: SET_PRODUCTS, payload: result });
      } catch (err) {
        console.log('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;