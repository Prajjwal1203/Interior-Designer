// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "interiordesigner-c5f15.firebaseapp.com",
  projectId: "interiordesigner-c5f15",
  storageBucket: "interiordesigner-c5f15.firebasestorage.app",
  messagingSenderId: "799995295647",
  appId: "1:799995295647:web:8a06a70c0966a9e991afaa",
  measurementId: "G-BNFEHS136J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);