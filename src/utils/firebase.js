import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword }