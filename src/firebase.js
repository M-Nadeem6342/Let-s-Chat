
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCL8jG8MREWIzDeDDTQ78rG6k22gfAA5ec",
  authDomain: "let-s-chat-b0d5c.firebaseapp.com",
  projectId: "let-s-chat-b0d5c",
  storageBucket: "let-s-chat-b0d5c.appspot.com",
  messagingSenderId: "967388937859",
  appId: "1:967388937859:web:2e3b846cef48ffd417e5b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app);

   