import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAQu5honbU2oShPddvlF-K_J4AjVr94C1w",
    authDomain: "reefjourney-e6175.firebaseapp.com",
    projectId: "reefjourney-e6175",
    storageBucket: "reefjourney-e6175.appspot.com",
    messagingSenderId: "968156184285",
    appId: "1:968156184285:web:97ded0fd14308a5d2a6534",
    measurementId: "G-3E9EP68MV8"
  };

  // Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
//const timestamp = firebase.firestore.Timestamp;
export {db,auth}