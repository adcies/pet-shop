import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from './actions/itemActions';

import Header from './layout/Header/Header';
import Main from './layout/Main/Main';

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
      <Main loading={loading} items={items} />
    </div>
  );
}

export default App;
