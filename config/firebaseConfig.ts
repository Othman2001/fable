// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg3KO1hW8zPHiMeWS07EJonEJkJof7JQo",
  authDomain: "fable-b9dfa.firebaseapp.com",
  projectId: "fable-b9dfa",
  storageBucket: "fable-b9dfa.appspot.com",
  messagingSenderId: "981104537281",
  appId: "1:981104537281:web:798c27d839c4484ff52e40",
  measurementId: "G-4QR5GLFVDE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
