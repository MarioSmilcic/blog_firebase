import React, { useState, useEffect } from "react";
import "./typewritterEffect.style.css";

const TypewriterEffect = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="typewriter-text">
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;
