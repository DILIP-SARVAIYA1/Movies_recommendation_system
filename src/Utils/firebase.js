// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvcUshbNfof669OpH9RimL0Gr0diY07u4",
  authDomain: "mrs-992.firebaseapp.com",
  projectId: "mrs-992",
  storageBucket: "mrs-992.appspot.com",
  messagingSenderId: "591057666343",
  appId: "1:591057666343:web:c1e1796965cf51d2c6a902",
  measurementId: "G-G3DCNKKXS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
