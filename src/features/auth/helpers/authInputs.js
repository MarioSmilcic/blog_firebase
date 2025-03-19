import { authInputs } from "../../../data/app-data";

export const getAuthInputs = (isSignUp = false) => {
  return authInputs.filter(
    (input) => !input.signupOnly || (input.signupOnly && isSignUp)
  );
};
