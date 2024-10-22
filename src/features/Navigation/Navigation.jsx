import { Link } from "react-router-dom";
import "./navigation.style.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">Blog</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create-post">Create Post</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <Link to="/login">LogIn</Link>
      </div>
    </div>
  );
};

export default Navigation;
