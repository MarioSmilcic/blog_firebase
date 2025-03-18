// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, provider } from "../firebase-config";
// import {
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   browserPopupRedirectResolver,
// } from "firebase/auth";

// export const useAuth = () => {
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleEmailAuth = async (email, password, isNewUser) => {
//     try {
//       setError("");
//       setIsLoading(true);

//       if (isNewUser) {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//       }

//       navigate("/");
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
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       setError("");
//       setIsLoading(true);

//       await signInWithPopup(auth, provider, browserPopupRedirectResolver);
//       navigate("/");
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
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     error,
//     isLoading,
//     handleEmailAuth,
//     signInWithGoogle,
//   };
// };
