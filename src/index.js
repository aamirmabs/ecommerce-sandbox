import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RouterProvider } from "./contexts/RouterContext";
import { ProductProvider } from "./contexts/ProductDataContext";
import { CartProvider } from "./contexts/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
