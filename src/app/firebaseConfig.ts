// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeW8ZoHek3e_YOTT1lYWgfXEFJ9KhWxNM",
  authDomain: "project-5-1736a.firebaseapp.com",
  databaseURL: "https://project-5-1736a-default-rtdb.firebaseio.com",
  projectId: "project-5-1736a",
  storageBucket: "project-5-1736a.firebasestorage.app",
  messagingSenderId: "670707137187",
  appId: "1:670707137187:web:482c750431334009015d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);