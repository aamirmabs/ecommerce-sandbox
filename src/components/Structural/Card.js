import React from "react";

import { useProductData } from "../../contexts/ProductDataContext";
import { useCart } from "../../contexts/CartContext.js";

import StarRating from "../Structural/StarRating";
import AddToCartBtn from "../Structural/AddToCartBtn";

function Card(props) {
  const { productData } = useProductData();
  const { cartState, cartDispatch } = useCart();

  const { productKey: key } = props;
  const { inWishlist } = cartState[key];
  const product = productData[key];

  const { title } = product;
  const { price, rating, brand, layoutText } = product.parameters;

  return (
    <div className="card" key={Math.random().toFixed(5) * 10000}>
      <div className="image">
        <img
          src={product.images.base + product.images.card.path}
          alt={"image of " + title}
        />
      </div>
      <div className="title">
        {title}
        <div className="brand-layout">
          by {brand} - {layoutText} Layout
        </div>
      </div>
      <div className="wishlist-icon">
        {inWishlist ? (
          <i
            className="fas fa-bookmark"
            onClick={() => {
              cartDispatch({
                type: "toggleProductInWishlist",
                payload: key,
              });
            }}
          ></i>
        ) : (
          <i
            className="far fa-bookmark"
            onClick={() => {
              cartDispatch({
                type: "toggleProductInWishlist",
                payload: key,
              });
            }}
          ></i>
        )}
      </div>
      <div className="cost-rating">
        <div>$ {price}</div>
        <div>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="cart-button">
        <AddToCartBtn productKey={key} />
      </div>
    </div>
  );
}

export default Card;
