import React from "react";
import "./ProductPage.css";

import Slider from "../Structural/Slider";
import PrimaryDesc from "./PrimaryDesc";
import SecondaryDesc from "./SecondaryDesc";

import { useProductData } from "../../contexts/ProductDataContext";

function ProductPage(props) {
  const propps = {
    key: `keyboard001`,
  };

  const { key } = propps;

  const { productData } = useProductData();
  const product = productData[key];

  const slidePath = "/assets/images/products/keyboard001/";
  const sliderArray = product.images.slider;

  return (
    <div className="product-page">
      <Slider
        containerClass="slider"
        slideClass="slide"
        base={slidePath}
        files={sliderArray}
      />
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
