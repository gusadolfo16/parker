import React from 'react';
import { signin } from 'next-auth/client';
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  const handleSubmit = async (formData) => {
    const { name, email, password } = formData;
    await signin('register', { name, email, password, redirect: false });
  };

  return (
    <div>
      <h1>Register</h1>
      <AuthForm onSubmit={handleSubmit} isRegister />
    </div>
  );
};

export default RegisterPage;
