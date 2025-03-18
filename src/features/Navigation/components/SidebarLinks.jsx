import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "../../../components/LogoutButton/LogoutButton";
import Button from "../../../components/Button/Button";
import { useModalsStore } from "../../../store/modals/modals.store";

export const SidebarLinks = ({ isAuth, userName }) => {
  const navigate = useNavigate();
  const closeSidebar = useModalsStore((state) => state.closeSidebar);

  if (!isAuth) {
    return (
      <Button
        text="LogIn"
        onClick={() => {
          navigate("/login");
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
