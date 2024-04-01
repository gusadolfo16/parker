import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import functions

const auth = getAuth();

export const getUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    }, (error) => {
      reject(error);
    });
  });
};

export const storeImageMetadata = async (imageUrl, metadata) => {
    // Implement logic to store image metadata in Firebase (e.g., a separate collection)
    // This can be used for filtering based on categories or other properties
  };
