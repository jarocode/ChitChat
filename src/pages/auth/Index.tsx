import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from 'layout';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  const [showLogin, setShowLogin] = useState<boolean>();
  return (
    <Layout>
      <>
        <ToastContainer />
        {showLogin ? (
          <LoginForm setShowLogin={setShowLogin} />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </>
    </Layout>
  );
};

export default Auth;
