// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-market01.firebaseapp.com",
  projectId: "car-market01",
  storageBucket: "car-market01.appspot.com",
  messagingSenderId: "434385929064",
  appId: "1:434385929064:web:7542ef636ddb40154c4cdd",
  measurementId: "G-67CMNJ41TW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);