import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  getAuth,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQRYebxUor9jSvufs8_r5ZP5BgSvF-Lg",
  authDomain: "connect-delivery-f2a10.firebaseapp.com",
  databaseURL: "https://connect-delivery-f2a10-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "connect-delivery-f2a10",
  storageBucket: "connect-delivery-f2a10.appspot.com",
  messagingSenderId: "952020985037",
  appId: "1:952020985037:web:d250772cdcc7e0d020b584"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
  await firebaseSignOut(auth);
};

