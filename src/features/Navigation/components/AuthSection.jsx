import { Button, LogoutButton } from "../../../components";

export const AuthSection = ({ isAuth, userName, navigate }) => {
  return (
    <>
      {!isAuth ? (
        <Button text="LogIn" onClick={() => navigate("/auth/signin")} />
      ) : (
        <div className="user-profile">
          <span className="user-name">{userName}</span>
          <LogoutButton />
        </div>
      )}
    </>
  );
};
