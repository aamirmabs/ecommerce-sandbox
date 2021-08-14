import React from "react";

import StarRating from "../Structural/StarRating";
import AddToCartBtn from "../Structural/AddToCartBtn";

function PrimaryDesc(props) {
  const { title, productKey } = props;
  const { price, rating, brand, layoutText } = props.data;

  return (
    <div className="description-primary">
      <div className="title">{title}</div>
      <div className="price">$ {price}</div>
      <div className="rating">
        <StarRating rating={rating} />
      </div>
      <div className="brand">Brand: {brand}</div>
      <div className="layoutText">Layout: {layoutText}</div>
      <AddToCartBtn productKey={productKey} />
    </div>
  );
}

export default PrimaryDesc;
