import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";

const RouterContext = createContext(null);
export { RouterContext };

export function RouterProvider({ children }) {
  const [router, setRouter] = useState("home");

  return (
    <RouterContext.Provider value={{ router, setRouter }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
