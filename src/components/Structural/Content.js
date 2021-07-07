import React from "react";
import { useRouter } from "../../contexts/RouterContext";

import HomePage from "../HomePage/HomePage";
import CategoryPage from "../CategoryPage/CategoryPage";
import ProductPage from "../ProductPage/ProductPage";
import WishlistPage from "../WishlistPage/WishlistPage";
import CartPage from "../CartPage/CartPage";

function Content() {
  const { router } = useRouter();

  return (
    <div className="content">
      {router === "home" && <HomePage />}
      {router === "category" && <CategoryPage />}
      {router === "product" && <ProductPage />}
      {router === "wishlist" && <WishlistPage />}
      {router === "cart" && <CartPage />}
    </div>
  );
}

export default Content;
