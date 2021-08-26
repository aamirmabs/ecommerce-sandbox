import React, { useEffect, useState } from "react";

import { useHistory } from "../../contexts/HistoryContext";
import { useProductData } from "../../contexts/ProductDataContext";

const HeroSlider = () => {
  const { displayProduct } = useHistory();
  const { productData } = useProductData();

  const slideController = [
    { key: "keyboard001" },
    { key: "keyboard002" },
    { key: "keyboard003" },
    { key: "keycap005" },
    { key: "keycap007" },
    { key: "keycap008" },
  ];

  const [index, setIndex] = useState(0);

  const { key } = slideController[index];
  const { base, hero } = productData[key].images;

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
        src={base + hero}
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
