import React from "react";

import StarRating from "../Structural/StarRating";

function PrimaryDesc(props) {
  const { title } = props;
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
      <div>
        <button className="btn-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default PrimaryDesc;
