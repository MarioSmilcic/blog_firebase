import "./login.style.css";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./helpers/validation";
import { loginInputs } from "./helpers/loginInputs";

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const { error, handleEmailAuth, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema(isNewUser)),
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

  const loginInput = ({ id, name, type, placeholder }) => (
    <div key={id} className="input-group">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={errors[name] ? "error" : ""}
      />
      {errors[name] && (
        <span className="error-text">{errors[name].message}</span>
      )}
    </div>
  );

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
            .map(loginInput)}

          <button type="submit">{isNewUser ? "Sign Up" : "Sign In"}</button>
        </form>

        <p className="toggle-auth">
          {isNewUser ? "Already have an account? " : "Need an account? "}
          <button
            type="button"
            className="toggle-button"
            onClick={() => {
              setIsNewUser(!isNewUser);
              reset();
            }}
          >
            {isNewUser ? "Sign In" : "Sign Up"}
          </button>
        </p>

        <div className="divider">or</div>

        <button
          type="button"
          className="google-button"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
