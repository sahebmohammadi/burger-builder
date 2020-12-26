import React from "react";

const OrderSummary = ({ ingredients }) => {
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
    </>
  );
};

export default OrderSummary;
