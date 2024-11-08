import GithubIcon from "../../components/icons/GithubIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";
import "./footer.style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>
        &copy; {currentYear} Blog by Mario Smilcic. All rights reserved.
      </span>
      <div className="social-links">
        <a
          href="https://github.com/MarioSmilcic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mario-smil%C4%8Di%C4%87-7ba32422b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
