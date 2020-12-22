import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./../BuildControl/BuilControl";

const controls = [
  { label: "salad", type: "salad" },
  { label: "bacon", type: "bacon" },
  { label: "meat", type: "meat" },
  { label: "cheese", type: "cheese" },
];

const BuildControls = ({ onRemoveIngredient, onAddIngredient }) => {
  return (
    <div className={classes.wrapper}>
      {controls.map((item) => {
        const { type, label } = item;
        return (
          <BuildControl
            label={label}
            key={label}
            onRemoveIngredient={() => onRemoveIngredient(type)}
            onAddIngredient={() => onAddIngredient(type)}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
