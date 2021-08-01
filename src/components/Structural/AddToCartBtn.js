import React from "react";

import { useCart } from "../../contexts/CartContext";

function AddToCartBtn(props) {
  const { productKey: key } = props;

  const { cartState, cartDispatch } = useCart();
  const { units } = cartState[key];

  // const unitsAndIcon = { units } <i className="fas fa-shopping-cart"></i>;
  const icon = <i className="fas fa-shopping-cart"></i>;

  return (
    <button
      className="btn-cart"
      onClick={() =>
        cartDispatch({
          type: "increaseCountInCart",
          payload: key,
        })
      }
    >
      {units > 0 && units} {units > 0 && icon} Add to cart
    </button>
  );
}

export default AddToCartBtn;
