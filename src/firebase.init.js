// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzTyTfEuP3ndEAzXVq5YsaODhijaAIANs",
  authDomain: "ema-john-simple-54dcd.firebaseapp.com",
  projectId: "ema-john-simple-54dcd",
  storageBucket: "ema-john-simple-54dcd.appspot.com",
  messagingSenderId: "372487351596",
  appId: "1:372487351596:web:7e5c0414d786342b071089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;