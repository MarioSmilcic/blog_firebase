import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./auth.style.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="signin" replace />} />
      </Routes>
    </div>
  );
};

export default Auth;
