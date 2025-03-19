import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  handleEmailAuth as emailAuth,
  signInWithGoogle as googleSignIn,
  handleLogout as logout,
} from "../services";

export const useAuthProvider = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUserName(user.displayName || user.email.split("@")[0]);
      } else {
        setIsAuth(false);
        setUserName("");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleEmailAuth = async (email, password, isNewUser) => {
    return await emailAuth(email, password, isNewUser, setError, setIsLoading);
  };

  const signInWithGoogle = async () => {
    return await googleSignIn(setError, setIsLoading);
  };

  const handleLogout = async () => {
    const success = await logout(setError);
    if (success) {
      setIsAuth(false);
    }
    return success;
  };

  return {
    isAuth,
    setIsAuth,
    loading,
    error,
    isLoading,
    userName,
    handleEmailAuth,
    signInWithGoogle,
    handleLogout,
  };
};
