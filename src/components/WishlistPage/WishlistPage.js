import React from "react";
import "./WishlistPage.css";

import { useCart } from "../../contexts/CartContext";

import Card from "../Structural/Card";
import VisitHistory from "../Structural/VisitHistory";

function Wishlist() {
  const { cartState } = useCart();

  const wishlistKeys = Object.keys(cartState).reduce((acc, item) => {
    if (cartState[item].inWishlist) {
      acc.push(item);
    } else return acc;
    return acc;
  }, []);

  const emptyWishlistJSX = (
    <div className="empty-wishlist-content">
      <div className="wishlist-icon">
        <i className="far fa-bookmark"></i>
      </div>
      <div className="wishlist-content">
        Your wishlist is <strong>EMPTY</strong>...
      </div>
    </div>
  );

  const itemsInWishlistJSX = (
    <div className="card-grid">
      {wishlistKeys.map((key) => {
        return <Card key={Math.random().toFixed(5) * 10000} productKey={key} />;
      })}
    </div>
  );

  return (
    <div className="wishlist-page">
      <div class="wishlist-area">
        <div className="title">
          <h1>WISHLIST</h1>
        </div>
        {wishlistKeys.length > 0 ? itemsInWishlistJSX : emptyWishlistJSX}
      </div>
      <div class="recent-items">
        <VisitHistory />
      </div>
    </div>
  );
}

export default Wishlist;
