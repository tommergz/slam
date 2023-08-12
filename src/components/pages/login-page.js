import React from 'react';
import LoginForm from '../auth/login-form';

const LoginPage = ({setIsLoggedIn}) => {
  return (
    <div>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default LoginPage;
