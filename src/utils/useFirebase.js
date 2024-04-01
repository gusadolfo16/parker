import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

require('dotenv').config();

const firebaseConfig = {
  // ... your Firebase configuration details (use from .env if defined)
};

export function useFirebase() {
  const [firebaseInstance, setFirebaseInstance] = useState(null);

  useEffect(() => {
    const initFirebase = async () => {
      firebase.initializeApp(firebaseConfig);
      setFirebaseInstance(firebase);
    };

    initFirebase();

    // Cleanup function to avoid memory leaks
    return () => {
      // Any cleanup logic for firebase instance (if needed)
    };
  }, []);

  return firebaseInstance;
}
