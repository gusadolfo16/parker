import React from 'react';
import { useForm } from 'react-hook-form';

const AuthForm = ({ onSubmit, isRegister }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isRegister && (
        <input type="text" {...register('name')} placeholder="Name" />
      )}
      <input type="email" {...register('email')} placeholder="Email" />
      <input type="password" {...register('password')} placeholder="Password" />
      <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
