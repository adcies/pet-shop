import {
  SET_MESSAGE,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from './types';

const baseURL = 'http://localhost:5000';

const loginHeaders = {
  'Content-Type': 'application/json',
};

export const userLogin = (username, password) => async dispatch => {
  try {
    dispatch(setUserLoginLoading());
    const response = await fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: loginHeaders,
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message || `${response.status}: ${response.statusText}`
      );
    }
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err.message,
    });
  }
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const setErrors = message => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

export const setUserLoginLoading = () => {
  return {
    type: USER_LOGIN,
  };
};
