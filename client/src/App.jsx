import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from './actions/itemActions';

import Header from './layout/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import DogFoodPage from './pages/DogFoodPage/DogFoodPage';
import CatFoodPage from './pages/CatFoodPage/CatFoodPage';
import ToysPage from './pages/ToysPage/ToysPage';
import OtherPage from './pages/OtherPage/OtherPage';
import HomePage from './pages/HomePage/HomePage';

import { Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<LoginPage />} />
        <Route path='/category/dogfood' element={<DogFoodPage />} />
        <Route path='/category/catfood' element={<CatFoodPage />} />
        <Route path='/category/toys' element={<ToysPage />} />
        <Route path='/category/other' element={<OtherPage />} />
      </Routes>
    </div>
  );
}

export default App;
