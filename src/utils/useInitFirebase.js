import { useState, useEffect } from 'react';
import { useFirebase } from './useFirebase'; // Import the original hook

export function useInitFirebase() {
  const [firebaseInstance, setFirebaseInstance] = useState(null);

  useEffect(() => {
    const app = await useFirebase(); // Call useFirebase directly here
    setFirebaseInstance(app);
  }, []);

  return firebaseInstance;
}
