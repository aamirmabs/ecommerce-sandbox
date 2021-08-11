import React, { useState } from "react";
import "./CartPage.css";

import { useCart } from "../../contexts/CartContext";
import { useProductData } from "../../contexts/ProductDataContext";

function CartPage() {
  const { isCartEmpty, cartState, cartDispatch } = useCart();
  const { productData } = useProductData();

  const cartItemKeys = Object.keys(cartState);

  const cartPageWithItems = (
    <div className="cart-container">
      <div className="title">
        <h1>SHOPPING CART</h1>
      </div>

      <div className="items">
        {cartItemKeys.map((key) => {
          const { units, totalCost } = cartState[key];
          const { title } = productData[key];
          const { base, card } = productData[key].images;

          if (units > 0) {
            return (
              <div key={Math.random().toFixed(5) * 100000} className="item">
                <div className="image">
                  <img src={base + card.path} alt={card} />
                </div>
                <div className="title">{title}</div>
                <div className="count">
                  <i
                    onClick={() =>
                      cartDispatch({
                        type: "increaseCountInCart",
                        payload: key,
                      })
                    }
                    className="fas fa-chevron-up"
                  ></i>
                  {units}
                  <i
                    onClick={() =>
                      cartDispatch({
                        type: "decreaseCountInCart",
                        payload: key,
                      })
                    }
                    className="fas fa-chevron-down"
                  ></i>
                  <i
                    onClick={() =>
                      cartDispatch({ type: "removeFromCart", payload: key })
                    }
                    className="fas fa-times-circle"
                  ></i>
                </div>
                <div className="cost">{totalCost}</div>
              </div>
            );
          }
        })}
      </div>
      <div className="total">TOTAL</div>
      <div className="cart-empty">
        {isCartEmpty && <span>Your Cart is empty</span>}
      </div>
    </div>
  );

  const cartPageWithoutItems = (
    <div className="empty-cart-container">
      <div className="title">
        <h1>SHOPPING CART</h1>
      </div>
      <div className="empty-cart-content">
        <div className="cart-icon">
          <i className="fas fa-cart-plus"></i>
        </div>
        <div className="cart-content">
          Your cart is <strong>EMPTY</strong>...
        </div>
      </div>
    </div>
  );

  return <div>{isCartEmpty ? cartPageWithoutItems : cartPageWithItems}</div>;
}

export default CartPage;
