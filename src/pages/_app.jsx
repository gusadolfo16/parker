import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { NextAuthProvider } from 'next-auth';

import { useInitFirebase } from '../utils/useInitFirebase'; // Import the new hook

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const firebaseInstance = useInitFirebase(); // Call the custom hook

  if (!firebaseInstance) {
    return <div>Loading Firebase...</div>;
  }

  return (
    <NextAuthProvider adapter={FirebaseAdapter(firebaseInstance)}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
