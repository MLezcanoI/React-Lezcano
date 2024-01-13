import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "holistic-hole.firebaseapp.com",
    projectId: "holistic-hole",
    storageBucket: "holistic-hole.appspot.com",
    messagingSenderId: "594078558456",
    appId: "1:594078558456:web:6b6cec65d530ff8475330d"
};

const app = initializeApp(firebaseConfig);
console.log("Firebase conectado correctamente."); 
export const db = getFirestore(app)