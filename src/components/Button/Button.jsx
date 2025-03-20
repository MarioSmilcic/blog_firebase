import { getButtonClass } from "./helpers/buttonStyles";
import "./button.style.css";

export const Button = ({ text, disabled, type = "button", onClick }) => {
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
