import React, { useEffect, useState } from "react";

import Slider from "../Structural/Slider";

const slideController = [
  { fileName: "slide-1.jpg", key: "keyboard001" },
  { fileName: "slide-2.jpg", key: "keyboard002" },
  { fileName: "slide-3.jpg", key: "keyboard003" },
  { fileName: "slide-4.jpg", key: "keyboard004" },
  { fileName: "slide-5.jpg", key: "keyboard005" },
];

const HeroSlider = () => {
  return (
    <Slider base="/assets/images/hero-slider/" controller={slideController} />
  );
};

export default HeroSlider;
