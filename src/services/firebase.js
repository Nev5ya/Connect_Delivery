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


// const firebaseConfig = {
//   apiKey: "AIzaSyCiqSsBQYuYPqaniBgVJmHHpsWGTbs8WR0",
//   authDomain: "socialnetwork-de904.firebaseapp.com",
//   databaseURL: "https://socialnetwork-de904-default-rtdb.firebaseio.com",
//   projectId: "socialnetwork-de904",
//   storageBucket: "socialnetwork-de904.appspot.com",
//   messagingSenderId: "419015389004",
//   appId: "1:419015389004:web:50afa79994c27f8daaa9e9"
// };


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
            localStorage.setItem('id_user',json.currentUser.id);
            localStorage.setItem('name_user',json.currentUser.name);
            localStorage.setItem('role_id',json.currentUser.role_id);
            localStorage.setItem('email',json.currentUser.email);
            console.log(json)
            console.log(json.currentUser)
            console.log('role_id = ',json.currentUser.role_id)
            console.log('email = ',json.currentUser.email)
            console.log('id_user = ',json.currentUser.id)
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
        })
        .catch(err => console.log('err', err))

    await firebaseSignOut(auth);

};
