import React from "react";
import "./WishlistPage.css";

import { useCart } from "../../contexts/CartContext";

import Card from "../Structural/Card";

function Wishlist() {
  const { cartState } = useCart();

  const wishlistKeys = Object.keys(cartState).reduce((acc, item) => {
    if (cartState[item].inWishlist) {
      acc.push(item);
    } else return acc;
    return acc;
  }, []);

  return (
    <div className="wishlist-page">
      <div className="card-grid">
        {wishlistKeys.map((key) => {
          return (
            <Card key={Math.random().toFixed(5) * 10000} productKey={key} />
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
