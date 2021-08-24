import React from "react";

import { useCart } from "../../contexts/CartContext";

import StarRating from "../Structural/StarRating";
import AddToCartBtn from "../Structural/AddToCartBtn";

function PrimaryDesc(props) {
  const { title, productKey, inWishlist } = props;
  const { price, rating, brand, layoutText } = props.data;

  const { cartDispatch } = useCart();

  const wishlistIcon = inWishlist ? (
    <i
      className="fas fa-bookmark wishlist-icon"
      onClick={() => {
        cartDispatch({
          type: "toggleProductInWishlist",
          payload: productKey,
        });
      }}
    ></i>
  ) : (
    <i
      className="far fa-bookmark wishlist-icon"
      onClick={() => {
        cartDispatch({
          type: "toggleProductInWishlist",
          payload: productKey,
        });
      }}
    ></i>
  );

  return (
    <div className="description-primary">
      <div className="title">{title}</div>
      <div className="price">$ {price}</div>
      <div className="rating">
        <StarRating rating={rating} />
      </div>
      <div className="brand">Brand: {brand}</div>
      <div className="layoutText">Layout: {layoutText}</div>
      <span>
        <AddToCartBtn productKey={productKey} />
        {wishlistIcon}
      </span>
    </div>
  );
}

export default PrimaryDesc;
