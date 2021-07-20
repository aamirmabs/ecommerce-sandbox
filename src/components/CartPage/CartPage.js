import React from "react";
import "./CartPage.css";

import { useCart } from "../../contexts/CartContext";
import { useProductData } from "../../contexts/ProductDataContext";

function CartPage() {
  const { cartState, cartDispatch } = useCart();
  const { productData } = useProductData();

  // console.log(productData);

  const cartItemKeys = Object.keys(cartState);

  return (
    <div className="cart-page">
      <div className="title">
        <h1>SHOPPING CART</h1>
      </div>
      <div className="items">
        {cartItemKeys.map((key) => {
          const { units } = cartState[key];
          const { title } = productData[key];
          const { base, card } = productData[key].images;
          return (
            <div key={Math.random().toFixed(5) * 100000} className="item">
              <div className="image">
                <img src={base + card.path} alt={card} />
              </div>
              <div className="title">{title}</div>
              <div className="count">
                <i
                  onClick={() =>
                    cartDispatch({ type: "increaseCountInCart", payload: key })
                  }
                  className="fas fa-chevron-up"
                ></i>
                {units}
                <i
                  onClick={() =>
                    cartDispatch({ type: "decreaseCountInCart", payload: key })
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
              <div className="cost">Cost</div>
            </div>
          );
        })}

        <div className="item">
          <div className="image">Image</div>
          <div className="title">Title</div>
          <div className="count">
            <i
              onClick={() => cartDispatch({ type: "increaseCountInCart" })}
              className="fas fa-chevron-up"
            ></i>
            100
            <i
              onClick={() => cartDispatch({ type: "decreaseCountInCart" })}
              className="fas fa-chevron-down"
            ></i>
          </div>
          <div className="cost">Cost</div>
        </div>
      </div>
      <div className="total">TOTAL </div>
    </div>
  );
}

export default CartPage;
