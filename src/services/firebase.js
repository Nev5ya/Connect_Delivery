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
        })
        .catch(err => console.log('err', err))

    await firebaseSignOut(auth);

};
