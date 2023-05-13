import React from "react";
import "./ShopSize.scss";
const ShopSize = ({ size, available }) => {
  return (
    <div className="shop-size">
      <span>{size}</span>
      {!available && (
        <svg
          className="shop-size_line"
          width="100%"
          height="100%"
          viewBox="0 0 1 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="1"
            x2="1"
            y2="0"
            stroke="black"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
    </div>
  );
};

export default ShopSize;
