import React from "react";
import "./ShopPhotoGallery.scss";
const ShopPhotoGallery = () => {
  return (
    <div>
      <div className="shop-photo-gallery_main-image-wrapper">
        <img src="https://placehold.co/800x800" alt="" />
        <button className="shop-photo-gallery_control left" />
        <button className="shop-photo-gallery_control right" />
      </div>
      <div className="shop-photo-gallery_thumbnail-image-row">
        <button className="shop-photo-gallery_thumbnail-image-wrapper">
          <img src="https://placehold.co/800x800" alt="" />
        </button>
        <button className="shop-photo-gallery_thumbnail-image-wrapper">
          <img src="https://placehold.co/800x800" alt="" />
        </button>
        <button className="shop-photo-gallery_thumbnail-image-wrapper">
          <img src="https://placehold.co/800x800" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ShopPhotoGallery;
