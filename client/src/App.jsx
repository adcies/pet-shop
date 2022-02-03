import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const { items } = useSelector(state => state.item);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<HomePage items={items} />} />
          <Route path='/auth' element={<LoginPage />} />
          <Route
            path='/category/dogfood'
            element={<DogFoodPage items={items} />}
          />
          <Route
            path='/category/catfood'
            element={<CatFoodPage items={items} />}
          />
          <Route path='/category/toys' element={<ToysPage items={items} />} />
          <Route path='/category/other' element={<OtherPage items={items} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
