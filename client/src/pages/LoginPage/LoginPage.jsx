import './LoginPage.scss';

function LoginPage() {
  const handleSubmitForm = e => {
    e.preventDefault();
  };
  return (
    <div className='login-page'>
      <form onSubmit={handleSubmitForm} className='login-form'>
        <label htmlFor='login'>Login:</label>
        <input required type='text' id='login' name='login' />
        <br />
        <label htmlFor='password'>Password:</label>
        <input required type='password' id='password' name='password' />
        <br />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
}

export default LoginPage;
