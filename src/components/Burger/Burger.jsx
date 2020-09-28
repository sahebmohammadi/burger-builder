import React from "react";
//  Import componets
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient.jsx";
//  import styles
import classes from "./Burger.module.css";
const Burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="seeds1" />
      <BurgerIngredient type="seeds2" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
