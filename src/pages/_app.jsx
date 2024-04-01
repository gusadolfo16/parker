import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { NextAuthProvider } from 'next-auth';

import { useFirebase } from '../utils/useFirebase'; // Import the custom hook

import '../styles/globals.css';

function Parker({ Component, pageProps }) {
  const [firebaseInstance, setFirebaseInstance] = useState(null);

  useEffect(() => {
    const initFirebase = async () => {
      const app = await useFirebase(); // Call the useFirebase hook to initialize Firebase
      setFirebaseInstance(app);
    };

    initFirebase();
  }, []);

  if (!firebaseInstance) {
    return <div>Loading Firebase...</div>;
  }

  return (
    <NextAuthProvider adapter={FirebaseAdapter(firebaseInstance)}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default Parker;
