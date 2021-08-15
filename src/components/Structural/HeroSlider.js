import React, { useEffect, useState } from "react";

import Slider from "../Structural/Slider";

const HeroSlider = () => {
  return (
    <Slider
      containerClass="hero-slider"
      slideClass="hero-slide"
      base="/assets/images/hero-slider/"
      files={[
        "slide-1.jpg",
        "slide-2.jpg",
        "slide-3.jpg",
        "slide-4.jpg",
        "slide-5.jpg",
      ]}
    />
  );
};

export default HeroSlider;
