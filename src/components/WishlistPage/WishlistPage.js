import React from "react";
import "./WishlistPage.css";

import { useCart } from "../../contexts/CartContext";
import { useProductData } from "../../contexts/ProductDataContext";
import CardGrid from "../Structural/CardGrid";

function Wishlist() {
  const { cartState } = useCart();

  const wishlistKeys = Object.keys(cartState).reduce((acc, item) => {
    console.log("acc: ", acc);
    console.log("item: ", item);

    if (cartState[item].inWishlist) {
      acc.push(item);
    } else return acc;
    return acc;
  }, []);

  console.log(wishlistKeys);

  return (
    <div className="wishlist-page">
      <CardGrid keys={wishlistKeys}></CardGrid>
    </div>
  );
}

export default Wishlist;
