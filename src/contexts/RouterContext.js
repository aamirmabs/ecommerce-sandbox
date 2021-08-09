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
  const routerValue = "Router here!!!";

  const [router, setRouter] = useState("cart");

  return (
    <RouterContext.Provider value={{ routerValue, router, setRouter }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
