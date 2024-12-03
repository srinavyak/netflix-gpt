// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF5i_s34P9uMwimik5E2dCCyNTOCmLttw",
  authDomain: "netflixgpt-2fea4.firebaseapp.com",
  projectId: "netflixgpt-2fea4",
  storageBucket: "netflixgpt-2fea4.firebasestorage.app",
  messagingSenderId: "358940186273",
  appId: "1:358940186273:web:625cc12b79950165d242e0",
  measurementId: "G-GGTQEBM9B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);