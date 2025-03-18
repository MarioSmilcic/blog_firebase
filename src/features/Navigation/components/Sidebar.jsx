import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-config";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import Button from "../../../components/Button/Button";
import LogoutButton from "../../../components/LogoutButton/LogoutButton";
import "../components/styles/sidebar.style.css";
import TypewriterEffect from "../../../components/TypewritterEffect/TyperwritterEffect";

const Sidebar = ({ isOpen, onClose }) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

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
            <TypewriterEffect text="Blog" speed={100} />
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
              <Link to="/contact" onClick={onClose}>
                Contact
              </Link>
              <div className="sidebar-auth">
                <span className="user-name">
                  {auth.currentUser?.displayName ||
                    auth.currentUser?.email?.split("@")[0]}
                </span>
                <LogoutButton onSuccess={onClose} />
              </div>
            </>
          ) : (
            <Button
              text="LogIn"
              onClick={() => {
                navigate("/login");
                onClose();
              }}
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../../firebase-config";
// import { useContext } from "react";
// import { AuthContext } from "../../../Context/AuthContext";
// import Button from "../../../components/Button/Button";
// import "../components/styles/sidebar.style.css";
// import TypewriterEffect from "../../../components/TypewritterEffect/TyperwritterEffect";

// const Sidebar = ({ isOpen, onClose }) => {
//   const { isAuth, handleLogout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSidebarLogout = async () => {
//     const success = await handleLogout();
//     if (success) {
//       navigate("/login");
//       onClose();
//     }
//   };

//   return (
//     <>
//       {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <div
//             className="logo"
//             onClick={() => {
//               navigate("/");
//               onClose();
//             }}
//           >
//             <TypewriterEffect text="Blog" speed={100} />
//           </div>
//           <Button text="×" onClick={onClose} />
//         </div>

//         <nav className="sidebar-nav">
//           {isAuth ? (
//             <>
//               <Link to="/create-post" onClick={onClose}>
//                 Create Post
//               </Link>
//               <Link to="/about" onClick={onClose}>
//                 About
//               </Link>
//               <Link to="/contact" onClick={onClose}>
//                 Contact
//               </Link>
//               <div className="sidebar-auth">
//                 <span className="user-name">
//                   {auth.currentUser?.displayName ||
//                     auth.currentUser?.email?.split("@")[0]}
//                 </span>
//                 <Button text="LogOut" onClick={handleSidebarLogout} />
//               </div>
//             </>
//           ) : (
//             <Button
//               text="LogIn"
//               onClick={() => {
//                 navigate("/login");
//                 onClose();
//               }}
//             />
//           )}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
