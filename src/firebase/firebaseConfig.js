// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importa Firestore
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyojkGWp6CbL8pB0DEMrD91QVPnyQfwJ4",
  authDomain: "turistea-882da.firebaseapp.com",
  projectId: "turistea-882da",
  storageBucket: "turistea-882da.appspot.com",
  messagingSenderId: "235057042609",
  appId: "1:235057042609:web:95af3596a2c0fcdb443e90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);//esto es para el servicio de autenticación de firebase
export const db = getFirestore(app); //Se inicializa el servicio de cloud firestore
export const googleProvider = new GoogleAuthProvider();

