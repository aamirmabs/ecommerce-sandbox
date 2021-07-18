import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
export { CartContext };

const initialCart = {
  keyboard001: { units: 5, inWishlist: false },
  keyboard002: { units: 5, inWishlist: false },
  keyboard003: { units: 5, inWishlist: false },
};

export function CartProvider({ children }) {
  const cartValue = "I am the cart";

  const [cartState, cartDispatch] = useReducer((cartState, action) => {
    // local states here
    const key = action.payload;
    console.log(cartState[key].units);
    let newUnits = 0;

    switch (action.type) {
      case "increaseCountInCart":
        newUnits = cartState[key].units + 1;
        return {
          ...cartState,
          [key]: { units: newUnits },
        };

      case "decreaseCountInCart":
        newUnits = cartState[key].units - 1;
        return {
          ...cartState,
          [key]: { units: newUnits },
        };

      case "removeItemFromCart":
        console.log("Item removed from cart");
        return cartState;

      default:
        break;
    }

    console.log("Current cart:", cartState);
  }, initialCart);

  return (
    <CartContext.Provider value={{ cartValue, cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
