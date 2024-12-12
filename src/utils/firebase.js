// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCagOdWTvfN6UnO_TjT1ftpQzdtP2LGKfo",
  authDomain: "movieplex-72886.firebaseapp.com",
  projectId: "movieplex-72886",
  storageBucket: "movieplex-72886.firebasestorage.app",
  messagingSenderId: "1028092856632",
  appId: "1:1028092856632:web:34b40b8713d5003abbd9cd",
  measurementId: "G-RBFN9DG2JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);