import { Link } from "react-router-dom";
import "./navigation.style.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Navigation = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUserName(currentUser.displayName || currentUser.email.split("@")[0]);
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuth(false);
      setUserName("");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navigation">
      <div className="logo">Blog</div>

      <div className="links">
        <Link to="/">Home</Link>
        {isAuth && (
          <>
            <Link to="/create-post">Create Post</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </>
        )}
      </div>

      <div className="auth-section">
        {!isAuth ? (
          <Link to="/login">LogIn</Link>
        ) : (
          <div className="user-profile">
            <span className="user-name">{userName}</span>
            <button onClick={handleLogout} className="logout-button">
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
