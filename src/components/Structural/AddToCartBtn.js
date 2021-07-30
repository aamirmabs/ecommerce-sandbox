import React from "react";

import { useCart } from "../../contexts/CartContext";

function AddToCartBtn(props) {
  const { productKey: key } = props;

  const { cartDispatch } = useCart();

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
      Add to cart
    </button>
  );
}

export default AddToCartBtn;
