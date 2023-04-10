// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKDo0I70YWl8ykXzPvx30M4fTRXQdXT0Y",
  authDomain: "diploma-7508b.firebaseapp.com",
  projectId: "diploma-7508b",
  storageBucket: "diploma-7508b.appspot.com",
  messagingSenderId: "780245895806",
  appId: "1:780245895806:web:6c34e13fef27a8d4cf262f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categories = collection(db, 'categories');