
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmNFjOOZTS6v5vBej7m-MzuOfR4FSEaX0",
  authDomain: "coderhouse-react-ecommer-b2a50.firebaseapp.com",
  projectId: "coderhouse-react-ecommer-b2a50",
  storageBucket: "coderhouse-react-ecommer-b2a50.appspot.com",
  messagingSenderId: "998985856296",
  appId: "1:998985856296:web:a98a15baae432795c2cc1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);