import React from "react";

// <i class="fas fa-star"></i> full star
// <i class="far fa-star"></i> empty star
// <i class="fas fa-star-half-alt"></i> half star

function StarRating(props) {
  const { rating } = props;
  let ratingJSX = [];

  for (let i = 1; i <= 5; i++) {
    const key = Math.random().toFixed(4) * 1000;

    ratingJSX.push(
      i <= rating ? (
        <i key={key} className="fas fa-star"></i>
      ) : (
        <i key={key} className="far fa-star"></i>
      )
    );
  }
  return <div>{ratingJSX}</div>;
}

export default StarRating;
