import React from 'react';
import LoginOrRegister from '../../components/LoginOrRegister';

const Login = () => {
  const handleLogin = (username, password) => {
    console.log(username, password);
  };
  return <LoginOrRegister type="login" onNext={handleLogin} />;
};

export default Login;
