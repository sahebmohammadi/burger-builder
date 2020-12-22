import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = ({
  label,
  onAddIngredient,
  onRemoveIngredient,
  disabled,
}) => {
  return (
    <div className={classes.wrapper}>
      <div>{label}</div>
      <button onClick={onRemoveIngredient} disabled={disabled}>
        less
      </button>
      <button onClick={onAddIngredient}>more</button>
    </div>
  );
};

export default BuildControl;
