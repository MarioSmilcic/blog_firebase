import { Link } from "react-router-dom";
import "./navigation.style.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Button from "../../components/Button/Button";
import Sidebar from "./components/Sidebar";
import TypewriterEffect from "../../components/TypewritterEffect/TyperwritterEffect";

const Navigation = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="navigation">
        <div className="logo" onClick={() => navigate("/")}>
          {/* Blog */}
          <TypewriterEffect text="Blog" speed={100} />
        </div>

        <button className="menu-button" onClick={toggleSidebar}>
          <span className="menu-icon"></span>
        </button>

        <div className="desktop-nav">
          <div className="links">
            {isAuth && (
              <>
                <Link to="/create-post">Create Post</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/contact">Contact</Link> */}
              </>
            )}
          </div>

          <div className="auth-section">
            {!isAuth ? (
              <Link to="/login">LogIn</Link>
            ) : (
              <div className="user-profile">
                <span className="user-name">{userName}</span>
                <Button text="LogOut" onClick={handleLogout} />
              </div>
            )}
          </div>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navigation;
