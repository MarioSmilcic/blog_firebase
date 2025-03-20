import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validation";
import { AuthContext } from "../../../Context/AuthContext";

export const useAuth = (isSignUp = false) => {
  const { error, isLoading, handleEmailAuth, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema(isSignUp)),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const success = await handleEmailAuth(data.email, data.password, isSignUp);

    if (success) {
      navigate("/");
    } else if (success === false && !isSignUp) {
      navigate("/auth/signup");
      reset();
    }
  };

  const handleGoogleAuth = async () => {
    const success = await signInWithGoogle();
    if (success) {
      navigate("/");
    }
  };

  return {
    error,
    isLoading,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleGoogleAuth,
    reset,
  };
};
