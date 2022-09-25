import React, { useState } from "react";

import Layout from "layout";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";

interface AuthProps {}

const Auth: React.FC<AuthProps> = ({}) => {
  const [showLogin, setShowLogin] = useState<boolean>();
  return (
    <Layout>
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin} />
      ) : (
        <RegisterForm setShowLogin={setShowLogin} />
      )}
    </Layout>
  );
};

export default Auth;
