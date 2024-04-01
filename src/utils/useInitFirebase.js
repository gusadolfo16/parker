import { useState, useEffect } from 'react';
import { useFirebase } from './useFirebase'; // Import the original hook

export function useInitFirebase() {
  const [firebaseInstance, setFirebaseInstance] = useState(null);

  useEffect(() => {
    const initFirebase = async () => {
      const app = await useFirebase();
      setFirebaseInstance(app);
    };

    initFirebase();
  }, []);

  return firebaseInstance;
}
