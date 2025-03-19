import { useAuth } from "../hooks/useAuth";
import Button from "../../../components/Button/Button";
import AuthLink from "./AuthLink";
import { getAuthInputs } from "../helpers/authInputs";

const AuthForm = ({ isSignUp = false }) => {
  const {
    error,
    isLoading,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleGoogleAuth,
  } = useAuth(isSignUp);

  const authInputs = getAuthInputs(isSignUp);
  const title = isSignUp ? "Create Account" : "Sign In";
  const buttonText = isSignUp ? "Sign Up" : "Sign In";
  const loadingText = "Please wait...";

  return (
    <div className="auth-form">
      <h2>{title}</h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        {authInputs.map(({ id, name, type, placeholder }) => (
          <div key={id} className="input-group">
            <input
              type={type}
              placeholder={placeholder}
              {...register(name)}
              className={errors[name] ? "error" : ""}
              disabled={isLoading}
              autoComplete={
                name === "email"
                  ? "email"
                  : isSignUp
                  ? "new-password"
                  : "current-password"
              }
            />
            {errors[name] && (
              <span className="error-text">{errors[name].message}</span>
            )}
          </div>
        ))}

        <Button
          type="submit"
          text={isLoading ? loadingText : buttonText}
          disabled={isLoading}
        />
      </form>

      <AuthLink isSignUp={isSignUp} />

      <div className="divider">or</div>

      <Button
        text={isLoading ? loadingText : "Sign in with Google"}
        onClick={handleGoogleAuth}
        disabled={isLoading}
      />
    </div>
  );
};

export default AuthForm;
