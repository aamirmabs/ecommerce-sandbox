import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useProductData } from "./ProductDataContext";

const CartContext = createContext(null);
export { CartContext };

export function CartProvider({ children }) {
  // generating cart based on content of productData
  const { productData } = useProductData();

  const initialCart = {};

  Object.keys(productData).forEach((key) => {
    initialCart[key] = {
      units: 0,
      inWishlist: false,
      unitCost: productData[key].parameters.price,
      totalCost: 0,
    };
  });

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

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  // check if cart is empty on render and change of cartState
  useEffect(() => {
    const totalItems = Object.keys(cartState).reduce((total, key) => {
      return total + cartState[key].units;
    }, 0);
    // console.log({ totalItems });
    totalItems > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true);
    return () => {
      // console.log("clearing setEffect on CartContext");
    };
  }, [cartState]);

  return (
    <CartContext.Provider value={{ isCartEmpty, cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
