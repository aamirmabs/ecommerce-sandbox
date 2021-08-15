import React from "react";
import "./HomePage.css";

import CardGallery from "../Structural/CardGallery";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <CardGallery category={"keyboard"} limit={3} />
      <CardGallery category={"keycap"} limit={3} />
    </div>
  );
}

export default HomePage;
