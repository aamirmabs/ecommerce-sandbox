import React from "react";
import "./Header.css";

import { useRouter } from "../../contexts/RouterContext";
import { useHistory } from "../../contexts/HistoryContext";

function Header() {
  const { setRouter } = useRouter();
  const { displayCategory } = useHistory();

  return (
    <div className="header">
      <div className="header-logo" onClick={() => setRouter("home")}>
        <h1>
          <i className="fas fa-keyboard"></i> KeyShack
        </h1>
      </div>
      <div className="header-menu">
        <span onClick={() => setRouter("home")}>Home</span>
        <span onClick={() => displayCategory("keyboard")}>Keyboards</span>
        <span onClick={() => displayCategory("keycap")}>Keycaps</span>
        {/* <span onClick={() => setRouter("product")}>Product</span> */}
        <span onClick={() => setRouter("wishlist")}>Wishlist</span>
        <span onClick={() => setRouter("cart")}>Cart</span>
      </div>
    </div>
  );
}

export default Header;
