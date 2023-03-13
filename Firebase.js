// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  authDomain: "ifcnj-3a010.firebaseapp.com",
  projectId: "ifcnj-3a010",
  storageBucket: "ifcnj-3a010.appspot.com",
  messagingSenderId: "272779958946",
  appId: "1:272779958946:web:f9d57ed0f2f8e26cb315fb",
  measurementId: "G-2V1C8932C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);

export default app
export {DATABASE}
