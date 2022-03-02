import {
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  SET_MESSAGE,
} from '../actions/types';

const initialState = { user: null, isLoading: false, errorMessage: '' };

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLoading: true, errorMessage: '' };
    case USER_LOGIN_FAIL:
      return { ...state, isLoading: false, errorMessage: action.payload };
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload, isLoading: false };
    case USER_LOGOUT:
      return { user: null, isLoading: false, errorMessage: '' };
    case SET_MESSAGE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
