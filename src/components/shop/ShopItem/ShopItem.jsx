import React from "react";
import "./ShopItem.scss";
export const ShopItem = ({
  index,
  title = "Unset Title",
  price = "Unset Price",
  onClick = () => {
    alert("clicked");
  },
}) => {
  return (
    <button
      className="dco-shop-item"
      onClick={() => {
        onClick(index);
      }}
    >
      <div className="dco-shop-item_image-wrapper">
        <img src="https://placehold.co/400x600" alt="" />
        <img
          className="dco-shop-item_image-overlay"
          src="https://placehold.co/600x400"
          alt=""
        />
      </div>
      <span className="dco-shop-item_title">{title}</span>
      <span>{price}</span>
    </button>
  );
};
