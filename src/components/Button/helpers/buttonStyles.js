export const getButtonClass = (text) => {
  let classes = "button";

  switch (text) {
    case "Sign in with Google":
      classes = "google-button";
      break;
    case "Cancel":
      classes = "cancel-button";
      break;
    case "Delete":
      classes = "delete-button";
      break;
    case "×":
      classes = "close-button";
      break;
    case "LogIn":
      classes = "login-button";
      break;
    case "Sign In":
    case "Sign Up":
      classes = "toggle-button";
      break;
    default:
      classes = "button";
  }

  return classes;
};
