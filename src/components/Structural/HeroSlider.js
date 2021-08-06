import React, { useEffect, useState } from "react";

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const sliderImages = [
    "https://via.placeholder.com/1600x500?text=Slide+0",
    "https://via.placeholder.com/1600x500?text=Slide+1",
    "https://via.placeholder.com/1600x500?text=Slide+2",
    "https://via.placeholder.com/1600x500?text=Slide+3",
    "https://via.placeholder.com/1600x500?text=Slide+4",
  ];

  let maxSlides = sliderImages.length - 1;

  useEffect(() => {
    const slideManager = setInterval(() => {
      setIndex((index) => {
        if (index >= maxSlides) {
          return 0;
        } else return index + 1;
      });
    }, 1000);
    return () => {
      clearInterval(slideManager);
    };
  }, []);

  return (
    <div className="hero-slider">
      <img
        className="slide"
        src={sliderImages[index]}
        alt={"slider image " + Math.random().toFixed(2) * 100}
      />
    </div>
  );
};

export default HeroSlider;
