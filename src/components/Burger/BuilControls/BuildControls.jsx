import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./../BuildControl/BuilControl";

const controls = [
  { label: "salad", type: "salad" },
  { label: "bacon", type: "bacon" },
  { label: "meat", type: "meat" },
  { label: "cheese", type: "cheese" },
];

const BuildControls = ({
  onRemoveIngredient,
  onAddIngredient,
  disabledInfo,
  price,
  isPurchasable,
  orderd,
}) => {
  return (
    <div className={classes.wrapper}>
      <p>totla price : {price.toFixed(2)}</p>
      {controls.map((item) => {
        const { type, label } = item;
        return (
          <BuildControl
            label={label}
            key={label}
            onRemoveIngredient={() => onRemoveIngredient(type)}
            onAddIngredient={() => onAddIngredient(type)}
            disabled={disabledInfo[type]}
          />
        );
      })}
      <button
        className={classes.order}
        disabled={!isPurchasable}
        onClick={orderd}
      >
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
