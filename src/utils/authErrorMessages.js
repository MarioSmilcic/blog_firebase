export const authErrorMessages = {
  // Email auth errors
  emailAlreadyInUse:
    "This email is already registered. Try signing in instead.",
  userNotFound: "No account found with this email. Try signing up instead.",
  wrongPassword: "Incorrect password. Please try again.",
  invalidEmail: "Invalid email address.",
  weakPassword: "Password should be at least 6 characters.",

  // Google auth errors
  popupBlocked: "Popup was blocked. Please allow popups for this site.",
  popupClosed: "Sign-in was cancelled.",
  unauthorizedDomain:
    "This domain is not authorized for sign-in. Please try again later.",

  // Default error messages
  defaultAuthError: (message) => `Authentication error: ${message}`,
  googleSignInError: (message) => `Failed to sign in with Google: ${message}`,
  logoutError: (message) => `Logout error: ${message}`,
};

export const getAuthErrorMessage = (errorCode, errorMessage) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return authErrorMessages.emailAlreadyInUse;
    case "auth/user-not-found":
      return authErrorMessages.userNotFound;
    case "auth/wrong-password":
      return authErrorMessages.wrongPassword;
    case "auth/invalid-email":
      return authErrorMessages.invalidEmail;
    case "auth/weak-password":
      return authErrorMessages.weakPassword;
    case "auth/popup-blocked":
      return authErrorMessages.popupBlocked;
    case "auth/popup-closed-by-user":
      return authErrorMessages.popupClosed;
    case "auth/unauthorized-domain":
      return authErrorMessages.unauthorizedDomain;
    default:
      return authErrorMessages.defaultAuthError(errorMessage);
  }
};
