import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_PxlywHTv9US7HqGGjmQ90yOnai4xsbo",
  authDomain: "uber-ab3d4.firebaseapp.com",
  projectId: "uber-ab3d4",
  storageBucket: "uber-ab3d4.appspot.com",
  messagingSenderId: "889818611275",
  appId: "1:889818611275:web:dd30aa712953d92bad97ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
