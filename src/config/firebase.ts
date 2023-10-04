// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVEx-07FHiiQNQA7zeKru4O-6BK5a-xr0",
  authDomain: "auth-17dbb.firebaseapp.com",
  projectId: "auth-17dbb",
  storageBucket: "auth-17dbb.appspot.com",
  messagingSenderId: "950754811637",
  appId: "1:950754811637:web:e0c1cbe3f69f54e7c16fbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
