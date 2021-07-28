import React from "react";
import "./Card.css";

import { useProductData } from "../../contexts/ProductDataContext";

function CardGrid(props) {
  const { keys } = props;

  const { productData: products } = useProductData();

  return (
    <div className="card-grid">
      {keys.map((key) => {
        const product = products[key];

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
              <div>{rating}</div>
            </div>
            <div className="cart-button">Add to Cart</div>
          </div>
        );
      })}
    </div>
  );
}

export default CardGrid;
