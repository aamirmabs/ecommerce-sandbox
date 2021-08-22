import React from "react";
import { useHistory } from "../../contexts/HistoryContext";

function VisitHistory() {
  const { history, setHistory, displayProduct, trackProduct } = useHistory();
  const { productHistory } = history;
  const isHistoryAvailable = productHistory.length > 0 ? true : false;
  // history{
  //   activeProduct: null,
  //   productHistory: [],
  // }

  return (
    <div className="visit-history">
      <div className="visit-history-title">Recently Viewed</div>
      <div className="history-container">
        {productHistory.map((historyItem) => {
          return <div className="history-card">{historyItem}</div>;
        })}

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
