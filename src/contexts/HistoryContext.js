import React, { createContext, useContext, useState } from "react";

const HistoryContext = createContext(null);
export { HistoryContext };

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState({
    activeProduct: null,
    productHistory: [],
  });

  return (
    <HistoryContext.Provider value={(history, setHistory)}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(HistoryContext);
}
