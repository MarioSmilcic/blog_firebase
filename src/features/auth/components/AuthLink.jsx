import { Link } from "react-router-dom";

const AuthLink = ({ isSignUp }) => {
  const text = isSignUp ? "Already have an account?" : "Need an account?";
  const linkText = isSignUp ? "Sign In" : "Sign Up";
  const to = isSignUp ? "/auth/signin" : "/auth/signup";

  return (
    <div className="account-prompt">
      {text}{" "}
      <Link to={to} className="toggle-text">
        {linkText}
      </Link>
    </div>
  );
};

export default AuthLink;
