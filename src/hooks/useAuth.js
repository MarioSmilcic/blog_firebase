import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-config";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserPopupRedirectResolver,
} from "firebase/auth";

export const useAuth = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailAuth = async (email, password, isNewUser) => {
    try {
      setError("");

      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      navigate("/");
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered. Try signing in instead.");
          return false;
        case "auth/user-not-found":
          setError("No account found with this email. Try signing up instead.");
          return true;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        default:
          setError("An error occurred. Please try again.");
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider, browserPopupRedirectResolver);
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/popup-blocked") {
        setError("Popup was blocked. Please allow popups for this site.");
      } else if (error.code === "auth/popup-closed-by-user") {
        setError("Sign-in was cancelled.");
      } else {
        setError("Failed to sign in with Google. Please try again.");
      }
    }
  };

  return {
    error,
    handleEmailAuth,
    signInWithGoogle,
  };
};

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, provider } from "../firebase-config";
// import {
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// export const useAuth = () => {
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleEmailAuth = async (email, password, isNewUser) => {
//     try {
//       setError("");

//       if (isNewUser) {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//       }

//       navigate("/");
//     } catch (error) {
//       console.error(error);
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
//         // case "auth/invalid-email":
//         //   setError("Invalid email address.");
//         //   break;
//         // case "auth/weak-password":
//         //   setError("Password should be at least 6 characters.");
//         //   break;
//         default:
//           setError("An error occurred. Please try again.");
//       }
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       setError("Failed to sign in with Google. Please try again.");
//     }
//   };

//   return {
//     error,
//     handleEmailAuth,
//     signInWithGoogle,
//   };
// };
