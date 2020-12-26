import React from "react";
import clasess from "./Button.module.css";

const Button = ({ children, buttonType, onClick }) => {
  return (
    <button
      className={[clasess.button, clasess[buttonType]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
