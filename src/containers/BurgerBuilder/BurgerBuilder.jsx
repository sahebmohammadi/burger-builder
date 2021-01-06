import React, { useState, useMemo } from "react";
//  import components
import BuildControls from "../../components/Burger/BuilControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "./../../components/UI/Modal/Modal";
import axios from "../../axiosOrders";
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
  const [isPurchasable, setIsPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  // ? update purchase state :
  const updatePurchaseStat = (oldIngredients) => {
    // const oldIngredients = { ...ingredients };
    const sum = Object.keys(oldIngredients)
      .map((igKey) => {
        return oldIngredients[igKey];
      })
      .reduce((el, sum) => {
        return el + sum;
      }, 0);
    setIsPurchasable(sum > 0);
  };

  const addIngredientHandler = (type) => {
    let updatedIngredient = { ...ingredients };
    updatedIngredient[type] = updatedIngredient[type] + 1;
    setIngredients(updatedIngredient);
    // ? UPDATE THE PRICE
    const oldPrice = totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceAddition;
    setTotalPrice(newPrice);
    updatePurchaseStat(updatedIngredient);
  };

  const removeIngredientHandler = (type) => {
    let updatedIngredient = { ...ingredients };
    if (updatedIngredient[type] <= 0) {
      return null;
    }
    updatedIngredient[type] = updatedIngredient[type] - 1;
    setIngredients(updatedIngredient);
    // ? UPDATE THE PRICE
    const oldPrice = totalPrice;
    const priceDecrease = INGREDIENT_PRICES[type];
    const newPrice = oldPrice - priceDecrease;
    setTotalPrice(newPrice);
    updatePurchaseStat(updatedIngredient);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };
  const cancelPurchasingHandler = () => {
    setPurchasing(false);
  };
  const continuePurchasingHandler = () => {
    // alert("great! purchase continue ...");

    axios.post("/orders", ingredients);
  };
  //! DISABLE REMOVE BUTTON WITH NO INGREDIENT
  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  const modalRenderPerformancer = useMemo(
    () => (
      <Modal show={purchasing} onClick={cancelPurchasingHandler}>
        {console.log("purchasing ...")}
        <OrderSummary
          ingredients={ingredients}
          purchaseCanceled={cancelPurchasingHandler}
          purchaseContinued={continuePurchasingHandler}
          totalPrice={totalPrice}
        />
      </Modal>
    ),
    [purchasing]
  );
  return (
    <>
      {/* <Modal show={purchasing} onClick={cancelPurchasingHandler}>
        <OrderSummary
          ingredients={ingredients}
          purchaseCanceled={cancelPurchasingHandler}
          purchaseContinued={continuePurchasingHandler}
          totalPrice={totalPrice}
        />
      </Modal> */}
      {modalRenderPerformancer}
      <Burger ingredients={ingredients} />
      <BuildControls
        onRemoveIngredient={removeIngredientHandler}
        onAddIngredient={addIngredientHandler}
        disabledInfo={disabledInfo}
        price={totalPrice}
        isPurchasable={isPurchasable}
        orderd={purchaseHandler}
      />
    </>
  );
};

export default BurgerBuilder;
