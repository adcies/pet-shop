import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, setErrors } from '../../actions/userActions';
import { Navigate } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const { errorMessage, user } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(setErrors(''));
    },
    []
  );

  const handleUsernameInputOnChange = e => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordInputOnChange = e => {
    setPasswordInput(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const userName = usernameInput.trim();
    const password = passwordInput.trim();

    setUsernameInput('');
    setPasswordInput('');

    if (!userName || !password) {
      return dispatch(setErrors('Input fields cannot be empty!'));
    }
    dispatch(userLogin(usernameInput, passwordInput));
  };
  return (
    <>
      {user ? (
        <Navigate to='/myaccount' replace />
      ) : (
        <div className='login-page'>
          <p className='login-page__error'>{errorMessage}</p>
          <form onSubmit={handleSubmitForm} className='login-form'>
            <label htmlFor='login'>Login:</label>
            <input
              required
              type='text'
              value={usernameInput}
              onChange={handleUsernameInputOnChange}
              id='login'
              name='login'
            />
            <br />
            <label htmlFor='password'>Password:</label>
            <input
              required
              type='password'
              value={passwordInput}
              onChange={handlePasswordInputOnChange}
              id='password'
              name='password'
            />
            <br />
            <input type='submit' value='Login' />
          </form>
        </div>
      )}
    </>
  );
}

export default LoginPage;
