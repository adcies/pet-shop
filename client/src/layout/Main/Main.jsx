import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

const Main = ({ items, loading }) => {
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
      </Routes>
    </main>
  );
};

export default Main;
