import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  purchaseCanceled,
  purchaseContinued,
  totalPrice,
}) => {
  const ingredientList = Object.keys(ingredients).map((igKey, index) => {
    return (
      <li key={index}>
        {igKey}: {ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Order Summary </h3>
      <ul>{ingredientList}</ul>
      <p>continue to ckeckout ?</p>
      <p>
        <strong> total price : {totalPrice.toFixed(2)}$</strong>
      </p>
      <Button buttonType="cancel" onClick={purchaseCanceled}>
        CANCEL
      </Button>
      <Button buttonType="success" onClick={purchaseContinued}>
        ORDER
      </Button>
    </>
  );
};

export default OrderSummary;
