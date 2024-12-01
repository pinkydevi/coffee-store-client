// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFUlZpL8PNtfSdvCoXR6OmlsVWRgYtJYk",
  authDomain: "coffee-store-81d9a.firebaseapp.com",
  projectId: "coffee-store-81d9a",
  storageBucket: "coffee-store-81d9a.firebasestorage.app",
  messagingSenderId: "888427682688",
  appId: "1:888427682688:web:e921888482670a36523f65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);