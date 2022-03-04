import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MyAccountPage from '../../pages/MyAccountPage/MyAccountPage';
import { useSelector } from 'react-redux';
import BuyNow from '../../components/BuyNow/BuyNow';

const Main = ({ items, loading }) => {
  const { user } = useSelector(state => state.user);

  return (
    <main className='main'>
      <Routes>
        <Route
          path='/'
          element={
            <CategoryPage
              items={items}
              isLoading={loading}
              currentPageName='Home Page'
            />
          }
        />
        <Route path='/auth' element={<LoginPage />} />
        <Route
          path='/category/dogfood'
          element={
            <CategoryPage
              currentPageName='Dog Food'
              currentPageCategory='dog-food'
              items={items}
              isLoading={loading}
            />
          }
        />
        <Route
          path='/category/catfood'
          element={
            <CategoryPage
              currentPageName='Cat Food'
              currentPageCategory='cat-food'
              items={items}
              isLoading={loading}
            />
          }
        />
        <Route
          path='/category/toys'
          element={
            <CategoryPage
              currentPageName='Toys'
              currentPageCategory='toys'
              items={items}
              isLoading={loading}
            />
          }
        />
        <Route
          path='/category/other'
          element={
            <CategoryPage
              currentPageName='Other'
              currentPageCategory='other'
              items={items}
              isLoading={loading}
            />
          }
        />
        <Route
          path='/myaccount'
          element={user ? <MyAccountPage /> : <Navigate to='/auth' replace />}
        />
        <Route
          path='/buynow'
          element={user ? <BuyNow /> : <Navigate to='/auth' replace />}
        />
      </Routes>
    </main>
  );
};

export default Main;
