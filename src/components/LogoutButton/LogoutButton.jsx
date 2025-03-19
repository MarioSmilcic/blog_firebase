import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Button from "../Button/Button";

const LogoutButton = ({ onSuccess }) => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    const success = await handleLogout();
    if (success) {
      navigate("/login");
      if (onSuccess) onSuccess();
    }
  };

  return <Button text="LogOut" onClick={handleLogoutClick} />;
};

export default LogoutButton;
