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
    console.log("displayProduct() key: " + key);
    setRouter("product");
  };

  return (
    <HistoryContext.Provider value={{ history, setHistory, displayProduct }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(HistoryContext);
}
