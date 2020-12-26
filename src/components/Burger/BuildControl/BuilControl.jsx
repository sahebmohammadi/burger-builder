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
      <button onClick={onRemoveIngredient} disabled={disabled} className={classes.remove}>
        less
      </button>
      <button onClick={onAddIngredient} className={classes.add}>more</button>
    </div>
  );
};

export default BuildControl;
