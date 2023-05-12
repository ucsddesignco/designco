import React from "react";
import "./ShopItem.scss";
export const ShopItem = ({
  index,
  image,
  overlayImage,
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
        <img src={image} alt="" />
        <img
          className="dco-shop-item_image-overlay"
          src={overlayImage}
          alt=""
        />
      </div>
      <span className="dco-shop-item_title" dangerouslySetInnerHTML={{ __html: title }} />
      <span>{price}</span>
    </button>
  );
};
