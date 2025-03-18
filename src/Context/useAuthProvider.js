import { useState, useEffect } from "react";
import { auth, provider } from "../firebase-config";
import {
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserPopupRedirectResolver,
  signOut,
} from "firebase/auth";
import {
  getAuthErrorMessage,
  authErrorMessages,
} from "../utils/authErrorMessages";

export const useAuthProvider = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleEmailAuth = async (email, password, isNewUser) => {
    try {
      setError("");
      setIsLoading(true);

      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      return true; // Success indicator
    } catch (error) {
      setError(getAuthErrorMessage(error.code, error.message));

      // Preserve the special return values for specific error cases
      if (error.code === "auth/email-already-in-use") {
        return false;
      }
      if (error.code === "auth/user-not-found") {
        return true;
      }

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setError("");
      setIsLoading(true);

      await signInWithPopup(auth, provider, browserPopupRedirectResolver);
      return true;
    } catch (error) {
      if (
        [
          "auth/popup-blocked",
          "auth/popup-closed-by-user",
          "auth/unauthorized-domain",
        ].includes(error.code)
      ) {
        setError(getAuthErrorMessage(error.code, error.message));
      } else {
        setError(authErrorMessages.googleSignInError(error.message));
      }

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuth(false);
      return true;
    } catch (error) {
      setError(authErrorMessages.logoutError(error.message));
      return false;
    }
  };

  return {
    isAuth,
    setIsAuth,
    loading,
    error,
    isLoading,
    handleEmailAuth,
    signInWithGoogle,
    handleLogout,
  };
};
