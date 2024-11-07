import TypewriterEffect from "../../components/TypewritterEffect/TyperwritterEffect";
import "./about.style.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>
          <TypewriterEffect text="About This Blog" speed={150} />
        </h1>

        <div className="about-content">
          <p>
            Welcome to our blog platform! This is a place where you can create
            and share your thoughts with others. You can sign up using your
            Google account or email, and start writing right away.
          </p>

          <p>
            The blog is built with React for the frontend, making it fast and
            responsive. We use Firebase to store your posts and handle user
            accounts securely.
          </p>

          <p>
            Every user can create, edit, and delete their own posts. The
            platform works great on both desktop and mobile devices, so you can
            blog from anywhere.
          </p>

          <p>
            We've focused on creating a clean, modern design with smooth
            animations and an easy-to-use interface. We hope you enjoy using our
            platform!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
