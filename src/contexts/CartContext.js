import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
export { CartContext };

const initialCart = {
  keyboard001: { units: 1, inWishlist: false },
  keyboard002: { units: 1, inWishlist: true },
  keyboard003: { units: 1, inWishlist: false },
  keyboard004: { units: 1, inWishlist: true },
  keyboard005: { units: 1, inWishlist: false },
  keyboard006: { units: 1, inWishlist: false },
  keyboard007: { units: 1, inWishlist: false },
  keyboard008: { units: 1, inWishlist: false },
  keyboard009: { units: 1, inWishlist: false },
  keyboard010: { units: 1, inWishlist: false },
  keycap001: { units: 1, inWishlist: false },
  keycap002: { units: 1, inWishlist: true },
  keycap003: { units: 1, inWishlist: false },
  keycap004: { units: 1, inWishlist: true },
  keycap005: { units: 1, inWishlist: false },
  keycap006: { units: 1, inWishlist: false },
  keycap007: { units: 1, inWishlist: false },
  keycap008: { units: 1, inWishlist: false },
  keycap009: { units: 1, inWishlist: false },
  keycap010: { units: 1, inWishlist: false },
};

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer((cartState, action) => {
    // local states here
    const key = action.payload;
    // console.log(cartState[key].units);
    let newUnits = -1;

    switch (action.type) {
      case "increaseCountInCart":
        newUnits = cartState[key].units + 1;
        return {
          ...cartState,
          [key]: { ...cartState[key], units: newUnits },
        };

      case "decreaseCountInCart":
        newUnits = cartState[key].units - 1;
        return {
          ...cartState,
          [key]: { ...cartState[key], units: newUnits },
        };

      case "removeFromCart":
        newUnits = 0;
        return {
          ...cartState,
          [key]: { ...cartState[key], units: newUnits },
        };

      default:
        throw new Error("Cart Error!");
    }
  }, initialCart);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
