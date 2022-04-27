import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    getAuth,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

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

// Create a root reference
export const auth = getAuth();
export const db = getDatabase();
export const storage = getStorage();

export const login = async(email, pass) => {
    const response = await fetch(`https://xn--l1aej.pw/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            localStorage.setItem('auth-token', json['auth-token']);
            localStorage.setItem('id_user',json.currentUser.id);
            localStorage.setItem('name_user',json.currentUser.name);
            localStorage.setItem('role_id',json.currentUser.role_id);
            localStorage.setItem('email',json.currentUser.email);
            localStorage.setItem('city',json.currentUser.city);
            localStorage.setItem('phone',json.currentUser.phone);
            localStorage.setItem('date_of_birth',json.currentUser.date_of_birth);
            console.log(json.currentUser)
        })
        .catch(err => console.log('err', err))

    await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async() => {
    const response = await fetch('https://xn--l1aej.pw/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-Requested-With": "XMLHttpRequest",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'auth-token': localStorage.getItem('auth-token')
            })

        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            localStorage.removeItem('auth-token');
            localStorage.removeItem('email');
            localStorage.removeItem('id_user');
            localStorage.removeItem('role_id');
            localStorage.removeItem('name_user');
            localStorage.removeItem('city');
            localStorage.removeItem('phone');
            localStorage.removeItem('date_of_birth');
        })
        .catch(err => console.log('err', err))

    await firebaseSignOut(auth);

};
