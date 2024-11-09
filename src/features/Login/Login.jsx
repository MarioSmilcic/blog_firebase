import "./login.style.css";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/loginSchema";
import { loginInputs } from "./helpers/loginInputs";
import Button from "../../components/Button/Button";

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const { error, isLoading, handleEmailAuth, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema(isNewUser)),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const shouldToggleNewUser = await handleEmailAuth(
      data.email,
      data.password,
      isNewUser
    );
    if (shouldToggleNewUser !== undefined) {
      setIsNewUser(shouldToggleNewUser);
      reset();
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2>{isNewUser ? "Create Account" : "Sign In"}</h2>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
          {loginInputs
            .filter(
              (input) => !input.signupOnly || (input.signupOnly && isNewUser)
            )
            .map(({ id, name, type, placeholder }) => (
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
                      : name === "password"
                      ? "current-password"
                      : "new-password"
                  }
                />
                {errors[name] && (
                  <span className="error-text">{errors[name].message}</span>
                )}
              </div>
            ))}

          <Button
            type="submit"
            text={
              isLoading ? "Please wait..." : isNewUser ? "Sign Up" : "Sign In"
            }
            disabled={isLoading}
          />
        </form>

        <div className="account-prompt">
          {isNewUser ? "Already have an account? " : "Need an account? "}
          <button
            className="toggle-text"
            onClick={() => {
              setIsNewUser(!isNewUser);
              reset();
            }}
            disabled={isLoading}
          >
            {isNewUser ? "Sign In" : "Sign Up"}
          </button>
        </div>

        <div className="divider">or</div>

        <Button
          text={isLoading ? "Please wait..." : "Sign in with Google"}
          onClick={signInWithGoogle}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default Login;
