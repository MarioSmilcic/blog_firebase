import * as yup from "yup";

export const baseSchema = {
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
};

export const validationSchema = (isNewUser) =>
  yup.object({
    ...baseSchema,
    ...(isNewUser && {
      confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords must match"),
    }),
  });
