import React, { createContext, useContext, useState } from "react";
import { useRouter } from "./RouterContext";

const HistoryContext = createContext(null);
export { HistoryContext };

export function HistoryProvider({ children }) {
  const { setRouter } = useRouter();
  const maxHistoryLength = 5;

  const [history, setHistory] = useState({
    activeProduct: null,
    productHistory: [],
  });

  // display a product without affecting the history state
  // used in the VisitHistory component where the product
  // already exists on the history state
  const displayProduct = (key) => {
    console.log("displayProduct()");
    setRouter("product");
    setHistory((oldHistory) => {
      return { ...oldHistory, activeProduct: key };
    });
  };

  const trackProduct = (key) => {
    // deep copy the productHistory content for modification
    const newProductHistory = [...history.productHistory];

    // add key if key is not already present
    const isKeyContained = newProductHistory.includes(key);
    if (isKeyContained === false) {
      newProductHistory.push(key);
    }

    // remove first value in array if length > 5
    if (newProductHistory.length > maxHistoryLength) {
      newProductHistory.shift();
    }

    setHistory((oldHistory) => {
      return { ...oldHistory, productHistory: newProductHistory };
    });
  };

  return (
    <HistoryContext.Provider
      value={{ history, setHistory, displayProduct, trackProduct }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(HistoryContext);
}
