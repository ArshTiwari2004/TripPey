
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMTFCX6so-EGeCzx_y9km9KvGj7Hm6WaA",
  authDomain: "trippey-5024b.firebaseapp.com",
  projectId: "trippey-5024b",
  storageBucket: "trippey-5024b.appspot.com",
  messagingSenderId: "420797751260",
  appId: "1:420797751260:web:4955ce67808058c87f3919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = getFirestore(app);