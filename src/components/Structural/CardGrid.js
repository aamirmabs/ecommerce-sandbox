import React from "react";

import { useProductData } from "../../contexts/ProductDataContext";

function CardGrid(props) {
  const { keys } = props;
  console.log(keys);
  const { productData: products } = useProductData();

  return (
    <div className="CardGrid">
      {/* {keys.map((key) => {
        const product = products[key];
        return (
          <div className="card">
            <div className="title">{product.title}</div>
          </div>
        );
      })} */}
    </div>
  );
}

export default CardGrid;
