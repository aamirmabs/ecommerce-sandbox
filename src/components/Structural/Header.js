import React from "react";
import "./Header.css";

import { useRouter } from "../../contexts/RouterContext";

function Header() {
  const { setRouter } = useRouter();

  return (
    <div className="header">
      <div className="header-logo">
        <h1>Logo</h1>
      </div>
      <div className="header-menu">
        <span onClick={() => setRouter("home")}>Home</span>
        <span onClick={() => setRouter("category")}>Category</span>
        <span onClick={() => setRouter("product")}>Product</span>
        <span onClick={() => setRouter("wishlist")}>Wishlist</span>
        <span onClick={() => setRouter("cart")}>Cart</span>
      </div>
    </div>
  );
}

export default Header;
