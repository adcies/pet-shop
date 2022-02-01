import { GET_ITEMS, ITEMS_LOADING } from './types';

const baseURL = 'http://localhost:5000';

export const getItems = () => async dispatch => {
  try {
    dispatch(setItemsLoading());
    const response = await fetch(`${baseURL}/items`);
    const data = await response.json();
    dispatch({
      type: GET_ITEMS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
