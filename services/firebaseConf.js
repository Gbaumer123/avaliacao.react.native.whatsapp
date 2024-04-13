// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCwhMZLbaXoRrWJ3sxXJswFCSVXKovaUeY",
  authDomain: "chat-computacaomovel.firebaseapp.com",
  projectId: "chat-computacaomovel",
  storageBucket: "chat-computacaomovel.appspot.com",
  messagingSenderId: "1077633784805",
  appId: "1:1077633784805:web:84753ea8cfd8094c902d0c",
  measurementId: "G-1377288ZJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

