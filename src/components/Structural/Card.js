import React from "react";

import { useProductData } from "../../contexts/ProductDataContext";

import StarRating from "../Structural/StarRating";
import AddToCartBtn from "../Structural/AddToCartBtn";

function Card(props) {
  const { productData } = useProductData();

  const { productKey: key } = props;
  const product = productData[key];

  const { price, rating, brand, layoutText } = product.parameters;

  return (
    <div className="card" key={Math.random().toFixed(5) * 10000}>
      <div className="image">Image</div>
      <div className="title">
        {product.title}
        <div className="brand-layout">
          by {brand} - {layoutText} Layout
        </div>
      </div>
      <div className="wishlist-icon">
        {product.wishlist ? (
          <i className="far fa-bookmark"></i>
        ) : (
          <i className="fas fa-bookmark"></i>
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
