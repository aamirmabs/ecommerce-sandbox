import React from "react";
import "./CategoryPage.css";

import CardGallery from "../Structural/CardGallery";

function CategoryPage() {
  return (
    <div className="category-page">
      <CardGallery category={"keyboard"} limit={6} />
    </div>
  );
}

export default CategoryPage;
