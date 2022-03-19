// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChQiANauZp3CKHtkEy7oDfElZUH_35ZkQ",
  authDomain: "noxbar.firebaseapp.com",
  projectId: "noxbar",
  storageBucket: "noxbar.appspot.com",
  messagingSenderId: "281776792781",
  appId: "1:281776792781:web:723b10c59bcc64af5e7584",
  measurementId: "G-V8SRRF1ZCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);