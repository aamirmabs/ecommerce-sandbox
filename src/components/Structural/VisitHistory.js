import React from "react";
import { useHistory } from "../../contexts/HistoryContext";
import { useProductData } from "../../contexts/ProductDataContext";

function VisitHistory() {
  const { history, displayProduct } = useHistory();
  const { productHistory } = history;
  const isHistoryAvailable = productHistory.length > 0 ? true : false;

  const { productData } = useProductData();

  const noHistoryJSX = (
    <div className="no-history-message">You have not viewed any items!</div>
  );
  const displayHistoryJSX = productHistory.map((key) => {
    const { title, parameters, images } = productData[key];
    const { price } = parameters;
    const { base, card } = images;
    return (
      <div className="history-card" key={key}>
        <div className="image">
          <img
            src={base + card.path}
            alt={title}
            onClick={() => displayProduct(key)}
          />
        </div>
        <div className="title" onClick={() => displayProduct(key)}>
          {title}
        </div>
        <div className="price">$ {price}</div>
        <div className="view-button">
          <button onClick={() => displayProduct(key)}>View</button>
        </div>
      </div>
    );
  });

  return (
    <div className="visit-history">
      <div className="visit-history-title">Recently Viewed</div>
      <div className="history-container">
        {isHistoryAvailable ? displayHistoryJSX : noHistoryJSX}
      </div>
    </div>
  );
}

export default VisitHistory;
