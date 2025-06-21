// Replace the below config with your Firebase project config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLrrJ3maAmsRNTauDmOWK_4Pd-P4lCBF0",
  authDomain: "ecommerce-jewellery-15db6.firebaseapp.com",
  projectId: "ecommerce-jewellery-15db6",
  storageBucket: "ecommerce-jewellery-15db6.firebasestorage.app",
  messagingSenderId: "900937100700",
  appId: "1:900937100700:web:d315faea241ff76a6bec59",
  measurementId: "G-9TP1EZBWGR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);