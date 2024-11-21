import TypewriterEffect from "../../components/TypewritterEffect/TyperwritterEffect";
import { aboutContent } from "../../data/app-data";
import "./about.style.css";

const About = () => {
  const { introText, technologies } = aboutContent;

  return (
    <div className="about">
      <div className="about-container">
        <h1>
          <TypewriterEffect text="About This Blog" speed={150} />
        </h1>

        <div className="about-content">
          <div className="demo-notice">
            <p>{introText.notice.text}</p>
          </div>

          {introText.paragraphs.map(({ id, text }) => (
            <p key={id}>{text}</p>
          ))}

          <div className="technologies-section">
            <h2>Technologies & Features</h2>
            <div className="tech-grid">
              {technologies.map(({ id, title, items }) => (
                <div key={id} className="tech-category">
                  <h3>{title}</h3>
                  <ul>
                    {items.map(({ id: itemId, text }) => (
                      <li key={itemId}>{text}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
