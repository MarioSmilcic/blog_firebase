import { Link, useNavigate } from "react-router-dom";
import { Button, LogoutButton } from "../../../components";
import { useModalsStore } from "../../../store";

export const SidebarLinks = ({ isAuth, userName }) => {
  const navigate = useNavigate();
  const closeSidebar = useModalsStore((state) => state.closeSidebar);

  if (!isAuth) {
    return (
      <Button
        text="LogIn"
        onClick={() => {
          navigate("/auth/signin");
          closeSidebar();
        }}
      />
    );
  }

  return (
    <>
      <Link to="/create-post" onClick={closeSidebar}>
        Create Post
      </Link>
      <Link to="/about" onClick={closeSidebar}>
        About
      </Link>
      <Link to="/contact" onClick={closeSidebar}>
        Contact
      </Link>
      <div className="sidebar-auth">
        <span className="user-name">{userName}</span>
        <LogoutButton onSuccess={closeSidebar} />
      </div>
    </>
  );
};
