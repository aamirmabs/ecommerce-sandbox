import React from "react";
import { useHistory } from "../../contexts/HistoryContext";

function VisitHistory() {
  const { history, setHistory, displayProduct, trackProduct } = useHistory();

  return (
    <div className="visit-history">
      <div className="title">Recently Viewed</div>
      <div className="history-container">
        <div className="history-card">
          <div className="image">Image</div>
          <div className="title">Title</div>
          <div className="price">$150</div>
          <div className="view-button">
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitHistory;
