import { Link } from "react-router-dom";
import "./navigation.style.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Button from "../../components/Button/Button";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import Sidebar from "./components/Sidebar";
import TypewriterEffect from "../../components/TypewritterEffect/TyperwritterEffect";

const Navigation = () => {
  const { isAuth } = useContext(AuthContext);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="navigation">
        <div className="logo" onClick={() => navigate("/")}>
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
                <Link to="/contact">Contact</Link>
              </>
            )}
          </div>

          <div className="auth-section">
            {!isAuth ? (
              <Button text="LogIn" onClick={() => navigate("/login")} />
            ) : (
              <div className="user-profile">
                <span className="user-name">{userName}</span>
                <LogoutButton />
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
// import { Link } from "react-router-dom";
// import "./navigation.style.css";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../firebase-config";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import Button from "../../components/Button/Button";
// import Sidebar from "./components/Sidebar";
// import TypewriterEffect from "../../components/TypewritterEffect/TyperwritterEffect";

// const Navigation = () => {
//   const { isAuth, handleLogout } = useContext(AuthContext);
//   const [userName, setUserName] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUserName(currentUser.displayName || currentUser.email.split("@")[0]);
//       } else {
//         setUserName("");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogoutClick = async () => {
//     const success = await handleLogout();
//     if (success) {
//       navigate("/login");
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <div className="navigation">
//         <div className="logo" onClick={() => navigate("/")}>
//           <TypewriterEffect text="Blog" speed={100} />
//         </div>

//         <button className="menu-button" onClick={toggleSidebar}>
//           <span className="menu-icon"></span>
//         </button>

//         <div className="desktop-nav">
//           <div className="links">
//             {isAuth && (
//               <>
//                 <Link to="/create-post">Create Post</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/contact">Contact</Link>
//               </>
//             )}
//           </div>

//           <div className="auth-section">
//             {!isAuth ? (
//               <Button text="LogIn" onClick={() => navigate("/login")} />
//             ) : (
//               <div className="user-profile">
//                 <span className="user-name">{userName}</span>
//                 <Button text="LogOut" onClick={handleLogoutClick} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//     </>
//   );
// };

// export default Navigation;
