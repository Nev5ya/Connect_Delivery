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
  
  const response =  await fetch(`https://xn--l1aej.pw/api/login`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        mode:'cors'
    },
    body: JSON.stringify({
       email: email,
       password: pass
    })
});
if (!response.ok) {
  console.log('response.ok', response.ok);
  //throw new Error(error ${response.status});
}

const result = await response.json();
localStorage.setItem('role', result.currentUser.role_title);
localStorage.setItem('role_id', result.currentUser.role_id);
email=result.currentUser.email;

console.log('result', result);
console.log(localStorage.getItem('role'));
console.log(localStorage.getItem('role_id'));
await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
  await firebaseSignOut(auth);
};

