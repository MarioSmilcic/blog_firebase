import "./card.style.css";

const Card = ({ children, title, className = "" }) => {
  return (
    <div className="card-container">
      <div className={`card ${className}`}>
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Card;
