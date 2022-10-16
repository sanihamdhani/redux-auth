// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC0qqNArcEuNOvgmhUoAKRUbEZc3Rhcyfk",
  authDomain: "fir-react-82bc3.firebaseapp.com",
  projectId: "fir-react-82bc3",
  storageBucket: "fir-react-82bc3.appspot.com",
  messagingSenderId: "204556926835",
  appId: "1:204556926835:web:736b31daee920c29c44f06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init services
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
