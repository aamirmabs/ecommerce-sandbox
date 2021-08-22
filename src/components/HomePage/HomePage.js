import React from "react";
import "./HomePage.css";

import HeroSlider from "../Structural/HeroSlider";
import CardGallery from "../Structural/CardGallery";
import VisitHistory from "../Structural/VisitHistory";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSlider />
      <div className="section section-primary">
        <div className="title-row">
          <div className="title">Keyboards</div>
          <button>View All</button>
        </div>
        <CardGallery category={"keyboard"} limit={3} />
      </div>
      <div className="section section-secondary">
        <div className="title-row">
          <div className="title">Keycaps</div>
          <button>View All</button>
        </div>
        <CardGallery category={"keycap"} limit={3} />
      </div>
      <VisitHistory />
    </div>
  );
}

export default HomePage;
