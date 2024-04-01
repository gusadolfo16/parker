import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth functions

const AuthForm = ({ onSubmit, isRegister }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error message

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    setError(null); // Clear any previous errors

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
      } else {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      }
      onSubmit(); // Call external function for successful authentication handling
    } catch (error) {
      console.error('Authentication error:', error);
      setError(error.message); // Set error message for display
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Perform any cleanups or side effects related to errors (optional)
  }, [error]); // Run effect when error state changes

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {isRegister && (
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          placeholder="Name"
        />
      )}
      <input
        type="email"
        {...register('email', { required: 'Email is required', pattern: /^\S+@\S+\.\S+$/i })}
        placeholder="Email"
        aria-invalid={errors.email?.type === 'required' || errors.email?.type === 'pattern'}
        aria-describedby="email-error"
      />
      {errors.email && <p id="email-error" className="error-message">{errors.email.message}</p>}
      <input
        type="password"
        {...register('password', { required: 'Password is required', minLength: 6 })}
        placeholder="Password"
        aria-invalid={errors.password?.type === 'required' || errors.password?.type === 'minLength'}
        aria-describedby="password-error"
      />
      {errors.password && <p id="password-error" className="error-message">{errors.password.message}</p>}
      <button type="submit" disabled={isLoading}>
        {isRegister ? 'Register' : 'Login'} {isLoading && <span className="loading-indicator">...</span>}
      </button>
    </form>
  );
};

export default AuthForm;
