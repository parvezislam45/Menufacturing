// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd7ceyFxg2ZCNfXm6cP_-drnjSQmBPQg0",
  authDomain: "bike-manufacturer.firebaseapp.com",
  projectId: "bike-manufacturer",
  storageBucket: "bike-manufacturer.appspot.com",
  messagingSenderId: "36409281806",
  appId: "1:36409281806:web:1d489c7e028ec176115b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;