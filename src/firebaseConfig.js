import firebase from 'firebase/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// firebaseConfig.js
const firebaseConfig = {
    apiKey: "AIzaSyDnNUquLvpubs0mmPOuDV1qYL-RQHHyVGE",
    authDomain: "parker-7bf18.firebaseapp.com",
    databaseURL: "https://parker-7bf18-default-rtdb.firebaseio.com",
    projectId: "parker-7bf18",
    storageBucket: "parker-7bf18.appspot.com",
    messagingSenderId: "486979200513",
    appId: "1:486979200513:web:36cb351af0ac77df0a4200",
    measurementId: "G-TGRH3ZB7V3"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const auth = firebase.auth();
  const storage = firebase.storage();
  const firestore = firebase.firestore(); // Initialize Firestore instance
  
  export { auth, storage, firestore };