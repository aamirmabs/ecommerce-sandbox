import React from "react";

function SecondaryDesc(props) {
  const { primary, secondary } = props.data;

  return (
    <div className="description-secondary">
      <div className="primary-text">
        <div className="primary-text-heading">DETAILS</div>
        {primary}
      </div>
      <div className="secondary-text">
        {secondary.map((item) => {
          return (
            <div
              className="secondary-item"
              key={Math.random().toFixed(4) * 1000}
            >
              <div className="heading">{item.title}</div>
              <div className="details">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SecondaryDesc;
