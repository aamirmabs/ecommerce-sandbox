import React from "react";

import { useProductData } from "../../contexts/ProductDataContext";

import Card from "./Card";

function CardGallery(props) {
  const { category, limit } = props;

  const { productData } = useProductData();

  const keyArray = Object.keys(productData).filter(
    (key) => productData[key].category.primary === category
  );
  console.log(keyArray);

  return (
    <div>
      <h1>Card Gallery</h1>
      {category} {limit}
      <div className="card-grid">
        {keyArray.map((key) => {
          return (
            <Card key={Math.random().toFixed(5) * 10000} productKey={key} />
          );
        })}
      </div>
    </div>
  );
}

export default CardGallery;
