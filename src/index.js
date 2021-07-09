import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RouterProvider } from "./contexts/RouterContext";
import { ProductProvider } from "./contexts/ProductDataContext";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
