import React from "react";
import "./ProductPage.css";

import { useProductData } from "../../contexts/ProductDataContext";
import { useHistory } from "../../contexts/HistoryContext";

import Slider from "../Structural/Slider";
import PrimaryDesc from "./PrimaryDesc";
import SecondaryDesc from "./SecondaryDesc";
import VisitHistory from "../Structural/VisitHistory";

function ProductPage(props) {
  const { history } = useHistory();
  const { activeProduct: key } = history;

  const { productData } = useProductData();
  const product = productData[key];

  const { base } = product.images;
  const slidesArray = product.images.slider;

  return (
    <div className="product-page">
      <Slider
        containerClass="slider"
        slideClass="slide"
        base={base}
        files={slidesArray}
      />
      <PrimaryDesc
        title={product.title}
        data={product.parameters}
        productKey={key}
      />
      <SecondaryDesc data={product.description} />
      <VisitHistory />
    </div>
  );
}

export default ProductPage;
