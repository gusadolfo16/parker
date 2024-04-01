import React from 'react';
import { signin } from 'next-auth';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  const handleSubmit = async (formData) => {
    const { email, password } = formData;
    await signin('credentials', { email, password, redirect: false });
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
