import React, { createContext, useContext, useState } from "react";
import { useRouter } from "./RouterContext";

const HistoryContext = createContext(null);
export { HistoryContext };

export function HistoryProvider({ children }) {
  const { setRouter } = useRouter();

  const [history, setHistory] = useState({
    activeProduct: null,
    productHistory: [],
  });

  const displayProduct = (key) => {
    setRouter("product");
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
    if (newProductHistory.length > 5) {
      newProductHistory.shift();
    }

    setHistory((oldHistory) => {
      return { ...oldHistory, productHistory: newProductHistory };
    });

    // if (newProductHistory.includes(key) === false) {
    //   newProductHistory.length > 5 && newProductHistory.shift();
    //   console.log("25");
    //   setHistory((oldHistory) => {
    //     newProductHistory.push(key);
    //     return {
    //       ...oldHistory,
    //       productHistory: newProductHistory,
    //     };
    //   });
    // }
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
