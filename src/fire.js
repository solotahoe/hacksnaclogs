// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-uCsKxu1RQc4AkfeJOt5WYXDli8XgbBQ",
  authDomain: "hackersnack-a4e64.firebaseapp.com",
  projectId: "hackersnack-a4e64",
  storageBucket: "hackersnack-a4e64.appspot.com",
  messagingSenderId: "970930788921",
  appId: "1:970930788921:web:f286a72d28ed1903514be8",
  measurementId: "G-BFMRBXV1P4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
