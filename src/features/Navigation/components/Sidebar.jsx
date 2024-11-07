import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import Button from "../../../components/Button/Button";
import "../components/styles/sidebar.style.css";

const Sidebar = ({ isOpen, onClose }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuth(false);
      navigate("/login");
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div
            className="logo"
            onClick={() => {
              navigate("/");
              onClose();
            }}
          >
            Blog
          </div>
          <Button text="×" onClick={onClose} />
        </div>

        <nav className="sidebar-nav">
          {isAuth ? (
            <>
              <Link to="/create-post" onClick={onClose}>
                Create Post
              </Link>
              <Link to="/about" onClick={onClose}>
                About
              </Link>
              {/* <Link to="/contact" onClick={onClose}>
                Contact
              </Link> */}
              <div className="sidebar-auth">
                <span className="user-name">
                  {auth.currentUser?.displayName ||
                    auth.currentUser?.email?.split("@")[0]}
                </span>
                <Button text="LogOut" onClick={handleLogout} />
              </div>
            </>
          ) : (
            <Link to="/login" onClick={onClose}>
              LogIn
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
