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
  const { items, loading } = useSelector(state => state.item);
  console.log();
  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={<HomePage items={items} isLoading={loading} />}
          />
          <Route path='/auth' element={<LoginPage />} />
          <Route
            path='/category/dogfood'
            element={<DogFoodPage items={items} isLoading={loading} />}
          />
          <Route
            path='/category/catfood'
            element={<CatFoodPage items={items} isLoading={loading} />}
          />
          <Route
            path='/category/toys'
            element={<ToysPage items={items} isLoading={loading} />}
          />
          <Route
            path='/category/other'
            element={<OtherPage items={items} isLoading={loading} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
