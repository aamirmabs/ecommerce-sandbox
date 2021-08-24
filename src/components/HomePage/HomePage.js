import React from "react";
import "./HomePage.css";

import { useHistory } from "../../contexts/HistoryContext";

import HeroSlider from "../Structural/HeroSlider";
import CardGallery from "../Structural/CardGallery";
import VisitHistory from "../Structural/VisitHistory";

function HomePage() {
  const { displayCategory } = useHistory();

  return (
    <div className="home-page">
      <HeroSlider />
      <div className="section section-primary">
        <div className="title-row">
          <div className="title">Keyboards</div>
          <button
            className="btn-cart"
            onClick={() => displayCategory("keyboard")}
          >
            View All
          </button>
        </div>
        <CardGallery category={"keyboard"} limit={3} />
      </div>
      <div className="section section-secondary">
        <div className="title-row">
          <div className="title">Keycaps</div>
          <button
            className="btn-cart"
            onClick={() => displayCategory("keycap")}
          >
            View All
          </button>
        </div>
        <CardGallery category={"keycap"} limit={3} />
      </div>
      <VisitHistory />
    </div>
  );
}

export default HomePage;
