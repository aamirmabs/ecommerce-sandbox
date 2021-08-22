import React from "react";
import { useHistory } from "../../contexts/HistoryContext";
import { useProductData } from "../../contexts/ProductDataContext";

function VisitHistory() {
  const { history, setHistory, displayProduct } = useHistory();
  const { productHistory } = history;
  const isHistoryAvailable = productHistory.length > 0 ? true : false;

  const { productData } = useProductData();
  // history{
  //   activeProduct: null,
  //   productHistory: [],
  // }

  return (
    <div className="visit-history">
      <div className="visit-history-title">Recently Viewed</div>
      <div className="history-container">
        {productHistory.map((key) => {
          const { title, parameters, images } = productData[key];
          const { price } = parameters;
          const { base, card } = images;
          return (
            <div className="history-card" key={key}>
              <div className="image">
                <img src={base + card.path} alt={title} />
              </div>
              <div className="title" onClick={() => displayProduct(key)}>
                {title}
              </div>
              <div className="price">$ {price}</div>
              <div className="view-button">
                <button>View</button>
              </div>
            </div>
          );
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
