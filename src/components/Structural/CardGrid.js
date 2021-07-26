import React from "react";
import "./CardGrid.css";

import { useProductData } from "../../contexts/ProductDataContext";

function CardGrid(props) {
  const { keys } = props;

  const { productData: products } = useProductData();

  return (
    <div className="card-grid">
      {keys.map((key) => {
        const product = products[key];
        return (
          <div className="card">
            <div className="image">Image</div>
            <div className="title">{product.title}</div>
            <div className="wishlist-icon">Wishlist icon</div>
            <div className="cost">Cost</div>
            <div className="cart-button">Add to Cart</div>
          </div>
        );
      })}
    </div>
  );
}

export default CardGrid;
