import React from "react";
import "./Header.css";

import { useRouter } from "../../contexts/RouterContext";
import { useHistory } from "../../contexts/HistoryContext";

function Header() {
  const { router, setRouter } = useRouter();
  const { history, displayCategory } = useHistory();

  return (
    <div className="header">
      <div className="header-logo" onClick={() => setRouter("home")}>
        <h1>
          <i className="fas fa-keyboard"></i> KeyShack
        </h1>
      </div>
      <div className="header-menu">
        <div
          className={router === "home" && "active"}
          onClick={() => setRouter("home")}
        >
          Home
        </div>
        <div
          className={
            router === "category" &&
            history.activeCategory === "keyboard" &&
            "active"
          }
          onClick={() => displayCategory("keyboard")}
        >
          Keyboards
        </div>
        <div
          className={
            router === "category" &&
            history.activeCategory === "keycap" &&
            "active"
          }
          onClick={() => displayCategory("keycap")}
        >
          Keycaps
        </div>
        {/* <div className={router === "" && "active"} onClick={() => setRouter("product")}>Product</div> */}
        <div
          className={router === "wishlist" && "active"}
          onClick={() => setRouter("wishlist")}
        >
          Wishlist
        </div>
        <div
          className={router === "cart" && "active"}
          onClick={() => setRouter("cart")}
        >
          Cart
        </div>
      </div>
    </div>
  );
}

export default Header;
