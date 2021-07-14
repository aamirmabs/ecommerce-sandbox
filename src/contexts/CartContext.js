import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
export { CartContext };

export function CartProvider({ children }) {
  const cartValue = "I am the cart";

  return (
    <CartContext.Provider value={{ cartValue }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
