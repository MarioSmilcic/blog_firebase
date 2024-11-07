import { getButtonClass } from "./helpers/buttonStyles";
import "./button.style.css";

const Button = ({ text, disabled, type = "button", onClick }) => {
  const classes = getButtonClass(text);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`button ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
