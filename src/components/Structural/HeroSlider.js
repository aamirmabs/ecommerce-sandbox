import React, { useEffect, useState } from "react";

import { useHistory } from "../../contexts/HistoryContext";
import { useProductData } from "../../contexts/ProductDataContext";

const HeroSlider = () => {
  const { displayProduct } = useHistory();
  const { productData } = useProductData();

  const base = "/assets/images/hero-slider/";
  const slideController = [
    { fileName: "slide-1.jpg", key: "keyboard001" },
    { fileName: "slide-2.jpg", key: "keyboard002" },
    { fileName: "slide-3.jpg", key: "keyboard003" },
    { fileName: "slide-4.jpg", key: "keyboard004" },
    { fileName: "slide-5.jpg", key: "keyboard005" },
  ];

  const [index, setIndex] = useState(0);

  const { key } = slideController[index];

  let maxSlides = slideController.length - 1;

  useEffect(() => {
    const slideManager = setInterval(() => {
      setIndex((index) => {
        if (index >= maxSlides) {
          return 0;
        } else return index + 1;
      });
    }, 3000);
    return () => {
      clearInterval(slideManager);
    };
  }, []);

  return (
    <div className="hero-slider">
      <img
        className="hero-slide"
        src={base + slideController[index].fileName}
        alt={"slider image " + Math.random().toFixed(2) * 100}
      />
      <div className="hero-slide-description">
        <div className="slide-title">{productData[key].title}</div>
        <button
          className="btn-secondary"
          onClick={() => {
            displayProduct(key);
          }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
