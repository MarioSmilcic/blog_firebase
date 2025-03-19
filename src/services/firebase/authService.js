import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserPopupRedirectResolver,
  signOut,
} from "firebase/auth";
import { auth, provider } from "./firebase-config";
import {
  getAuthErrorMessage,
  authErrorMessages,
} from "../../utils/authErrorMessages";

export const handleEmailAuth = async (
  email,
  password,
  isNewUser,
  setError,
  setIsLoading
) => {
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

export const signInWithGoogle = async (setError, setIsLoading) => {
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

export const handleLogout = async (setError) => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    setError(authErrorMessages.logoutError(error.message));
    return false;
  }
};
