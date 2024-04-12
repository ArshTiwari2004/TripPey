import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKdlz9G0n1xmPg38pzS28mRDvvNYcr3OQ",
  authDomain: "rakshak-32073.firebaseapp.com",
  projectId: "rakshak-32073",
  storageBucket: "rakshak-32073.appspot.com",
  messagingSenderId: "387306643908",
  appId: "1:387306643908:web:4dbf16604b6396f4468491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);