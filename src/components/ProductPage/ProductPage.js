import React from "react";
import "./ProductPage.css";

import { useProductData } from "../../contexts/ProductDataContext";

function ProductPage() {
  const { productData } = useProductData();

  return (
    <div className="product-page">
      <h1>Product Page</h1>
      {productData.keyboard001.title}
    </div>
  );
}

export default ProductPage;
