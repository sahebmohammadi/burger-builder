import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = ({ label, onAddIngredient, onRemoveIngredient }) => {
  //   const lessHandler = () => {
  //     console.log(type);
  //   };
  //   const onAddIngredient = () => {};

  return (
    <div className={classes.wrapper}>
      <div>{label}</div>
      <button onClick={onRemoveIngredient}>less</button>
      <button onClick={onAddIngredient}>more</button>
    </div>
  );
};

export default BuildControl;
