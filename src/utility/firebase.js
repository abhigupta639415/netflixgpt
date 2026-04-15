// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvF_tCU8ehGzZ4QY-nn0daGKyPTvBodYY",
  authDomain: "netflix-gpt-39682.firebaseapp.com",
  projectId: "netflix-gpt-39682",
  storageBucket: "netflix-gpt-39682.firebasestorage.app",
  messagingSenderId: "1058518532154",
  appId: "1:1058518532154:web:a5d2fb81db59c3c3e63503",
  measurementId: "G-CGQCC6D90D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();