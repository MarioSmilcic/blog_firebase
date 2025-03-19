import { Link } from "react-router-dom";

export const NavLinks = ({ isAuth, onClick }) => {
  if (!isAuth) return null;

  return (
    <>
      <Link to="/create-post" onClick={onClick}>
        Create Post
      </Link>
      <Link to="/about" onClick={onClick}>
        About
      </Link>
      <Link to="/contact" onClick={onClick}>
        Contact
      </Link>
    </>
  );
};
