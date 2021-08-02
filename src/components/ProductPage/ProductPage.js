import React from "react";
import "./ProductPage.css";

import PrimaryDesc from "./PrimaryDesc";
import SecondaryDesc from "./SecondaryDesc";

import { useProductData } from "../../contexts/ProductDataContext";

function ProductPage(props) {
  const { productData } = useProductData();
  const product = productData.keyboard001;
  const key = "keyboard001";

  let currentSlide = 0;

  const sliderArray = product.images.slider;
  const slidePath = "/assets/images/products/keyboard001/";
  const slideSrc = slidePath + sliderArray[currentSlide];

  return (
    <div className="product-page">
      <div className="slider">
        <img src={slideSrc} alt={"image" + currentSlide} />
      </div>
      <PrimaryDesc
        title={product.title}
        data={product.parameters}
        productKey={key}
      />
      <SecondaryDesc data={product.description} />
    </div>
  );
}

export default ProductPage;
