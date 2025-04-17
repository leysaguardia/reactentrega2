// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyDslRpqqKDfwfB4G04eJWTzQOnC7sHA6uQ",
  authDomain: "react75915.firebaseapp.com",
  projectId: "react75915",
  storageBucket: "react75915.firebasestorage.app",
  messagingSenderId: "271669378897",
  appId: "1:271669378897:web:6ea8859795ce29307c5d70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )