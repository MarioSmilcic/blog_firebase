import "./components/styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { TypewriterEffect } from "../../components";
import { Sidebar, NavLinks, AuthSection, MenuButton } from "./components";

import { useModalsStore } from "../../store";

const Navigation = () => {
  const { isAuth, userName } = useContext(AuthContext);
  const navigate = useNavigate();
  const toggleSidebar = useModalsStore((state) => state.toggleSidebar);

  return (
    <>
      <div className="navigation">
        <div className="logo" onClick={() => navigate("/")}>
          <TypewriterEffect text="Blog" speed={100} />
        </div>

        <MenuButton onClick={toggleSidebar} />

        <div className="desktop-nav">
          <div className="links">
            <NavLinks isAuth={isAuth} />
          </div>

          <div className="auth-section">
            <AuthSection
              isAuth={isAuth}
              userName={userName}
              navigate={navigate}
            />
          </div>
        </div>
      </div>

      <Sidebar />
    </>
  );
};

export default Navigation;
