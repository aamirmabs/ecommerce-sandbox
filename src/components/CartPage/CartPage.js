import React from "react";
import "./CartPage.css";

import { useCart } from "../../contexts/CartContext";

function CartPage() {
  const { cartValue } = useCart();

  return (
    <div className="cart-page">
      <div class="title">
        <h1>SHOPPING CART</h1>
      </div>
      <div class="items">
        <div className="item">
          <div className="image">Image</div>
          <div className="title">Title</div>
          <div className="count">Count</div>
          <div className="cost">Cost</div>
        </div>
      </div>
      <div class="total">TOTAL </div>
    </div>
  );
}

export default CartPage;
