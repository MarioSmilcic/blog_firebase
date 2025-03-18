import { createContext, useContext } from "react";
import { useAuthProvider } from "./useAuthProvider";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
// import { createContext } from "react";
// import { useAuthProvider } from "./useAuthProvider";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const auth = useAuthProvider();

//   if (auth.loading) {
//     return <div>Loading...</div>;
//   }

//   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
// };

// import { createContext, useState, useEffect } from "react";
// import { auth, provider } from "../firebase-config";
// import {
//   onAuthStateChanged,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   browserPopupRedirectResolver,
//   signOut,
// } from "firebase/auth";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsAuth(true);
//       } else {
//         setIsAuth(false);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleEmailAuth = async (email, password, isNewUser) => {
//     try {
//       setError("");
//       setIsLoading(true);

//       if (isNewUser) {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//       }

//       return true; // Success indicator
//     } catch (error) {
//       console.error("Auth Error:", error.code, error.message);
//       switch (error.code) {
//         case "auth/email-already-in-use":
//           setError("This email is already registered. Try signing in instead.");
//           return false;
//         case "auth/user-not-found":
//           setError("No account found with this email. Try signing up instead.");
//           return true;
//         case "auth/wrong-password":
//           setError("Incorrect password. Please try again.");
//           break;
//         case "auth/invalid-email":
//           setError("Invalid email address.");
//           break;
//         case "auth/weak-password":
//           setError("Password should be at least 6 characters.");
//           break;
//         default:
//           setError(`Authentication error: ${error.message}`);
//       }
//       return false;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       setError("");
//       setIsLoading(true);

//       await signInWithPopup(auth, provider, browserPopupRedirectResolver);
//       return true;
//     } catch (error) {
//       console.error("Google Sign-in Error:", error.code, error.message);

//       switch (error.code) {
//         case "auth/popup-blocked":
//           setError("Popup was blocked. Please allow popups for this site.");
//           break;
//         case "auth/popup-closed-by-user":
//           setError("Sign-in was cancelled.");
//           break;
//         case "auth/unauthorized-domain":
//           setError(
//             "This domain is not authorized for sign-in. Please try again later."
//           );
//           break;
//         default:
//           setError(`Failed to sign in with Google: ${error.message}`);
//       }
//       return false;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setIsAuth(false);
//       return true;
//     } catch (error) {
//       console.error(error);
//       setError(`Logout error: ${error.message}`);
//       return false;
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuth,
//         setIsAuth,
//         error,
//         isLoading,
//         handleEmailAuth,
//         signInWithGoogle,
//         handleLogout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

//older
// import { createContext, useState, useEffect } from "react";
// import { auth } from "../firebase-config";
// import { onAuthStateChanged } from "firebase/auth";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsAuth(true);
//       } else {
//         setIsAuth(false);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <AuthContext.Provider value={{ isAuth, setIsAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
