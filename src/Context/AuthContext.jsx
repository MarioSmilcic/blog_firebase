import { createContext, useContext } from "react";
import { useAuthProvider } from "./useAuthProvider";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
