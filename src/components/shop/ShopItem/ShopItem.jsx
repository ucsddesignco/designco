import React from "react";
import "./ShopItem.scss";
export const ShopItem = ({ title = "Unset Title", price = "Unset Price" }) => {
  return (
    <div className="dco-shop-item">
      <div className="dco-shop-item_image-wrapper">
        <img src="https://placehold.co/600x400" alt="" />
        <img
          className="dco-shop-item_image-overlay"
          src="https://placehold.co/99x99"
          alt=""
        />
      </div>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};
