import React from "react";
import "./CategoryPage.css";

import CardGallery from "../Structural/CardGallery";

import { useHistory } from "../../contexts/HistoryContext";

function CategoryPage() {
  const { history } = useHistory();
  const { activeCategory } = history;

  return (
    <div className="category-page">
      <div className="filters">FILTERS</div>
      <div className="results">
        {/* TODO: create a state in historyContext to track
        activeCategory on click */}
        <CardGallery category={activeCategory} limit={20} />
      </div>
    </div>
  );
}

export default CategoryPage;
