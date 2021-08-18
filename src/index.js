import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RouterProvider } from "./contexts/RouterContext";
import { HistoryProvider } from "./contexts/HistoryContext";
import { ProductProvider } from "./contexts/ProductDataContext";
import { CartProvider } from "./contexts/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <HistoryProvider>
      <RouterProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </RouterProvider>
    </HistoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
