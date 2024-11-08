import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBN1hQBZj0FxZ7R9JZ1joUDn0HuDfYohgQ",
//   authDomain: "blog-firebase-63736.firebaseapp.com",
//   projectId: "blog-firebase-63736",
//   storageBucket: "blog-firebase-63736.appspot.com",
//   messagingSenderId: "372435473388",
//   appId: "1:372435473388:web:8305b6abf3c5b9369126c9",
//   measurementId: "G-46QWQF6T0R",
// };

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();
