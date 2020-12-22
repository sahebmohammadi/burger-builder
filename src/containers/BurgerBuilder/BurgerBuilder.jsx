import React, { useState } from "react";
//  import components
import BuildControls from "../../components/Burger/BuilControls/BuildControls";
import Burger from "../../components/Burger/Burger";

// ? GLOBAL VARIABLE :
const INGREDIENT_PRICES = {
  bacon: 1,
  salad: 0.5,
  cheese: 0.99,
  meat: 1.4,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    cheese: 0,
    meat: 0,
    salad: 0,
    // seeds2: 1,
    bacon: 0,
  });
  const [totalPrice, setTotalPrice] = useState(4);

  const addIngredientHandler = (type) => {
    let updatedIngredient = { ...ingredients };
    updatedIngredient[type] = updatedIngredient[type] + 1;
    setIngredients(updatedIngredient);
    // ? UPDATE THE PRICE
    const oldPrice = totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceAddition;
    setTotalPrice(newPrice);
  };

  const removeIngredientHandler = (type) => {
    let updatedIngredient = { ...ingredients };
    if (updatedIngredient[type] <= 0) {
      return null;
    }
    updatedIngredient[type] = updatedIngredient[type] - 1;
    setIngredients(updatedIngredient);
    // ? UPDATE THE PRIC
    const oldPrice = totalPrice;
    const priceDecrease = INGREDIENT_PRICES[type];
    const newPrice = oldPrice - priceDecrease;
    setTotalPrice(newPrice);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        onRemoveIngredient={removeIngredientHandler}
        onAddIngredient={addIngredientHandler}
      />
    </>
  );
};

export default BurgerBuilder;
