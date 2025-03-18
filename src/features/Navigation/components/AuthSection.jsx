import Button from "../../../components/Button/Button";
import LogoutButton from "../../../components/LogoutButton/LogoutButton";

export const AuthSection = ({ isAuth, userName, navigate }) => {
  return (
    <>
      {!isAuth ? (
        <Button text="LogIn" onClick={() => navigate("/login")} />
      ) : (
        <div className="user-profile">
          <span className="user-name">{userName}</span>
          <LogoutButton />
        </div>
      )}
    </>
  );
};
