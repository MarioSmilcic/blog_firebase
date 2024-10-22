// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN1hQBZj0FxZ7R9JZ1joUDn0HuDfYohgQ",
  authDomain: "blog-firebase-63736.firebaseapp.com",
  projectId: "blog-firebase-63736",
  storageBucket: "blog-firebase-63736.appspot.com",
  messagingSenderId: "372435473388",
  appId: "1:372435473388:web:8305b6abf3c5b9369126c9",
  measurementId: "G-46QWQF6T0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export { auth, provider };
