import React from "react";
import "./ShopPhotoGallery.scss";
import { useState } from "react";

const ShopPhotoGallery = ({ images = [], price }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div className="shop-photo-gallery">
      <div className="shop-photo-gallery_preview">
        <div className="shop-photo-gallery_main-image-wrapper">
          <img src={images[photoIndex]} alt="" />
          <button
            className="shop-photo-gallery_control left"
            onClick={() => {
              setPhotoIndex(Math.max(0, photoIndex - 1));
            }}
          />
          <button
            className="shop-photo-gallery_control right"
            onClick={() => {
              setPhotoIndex(Math.min(images.length - 1, photoIndex + 1));
            }}
          />
        </div>
      </div>
      <div className="shop-photo-gallery_thumbnail-container">
        <div className="shop-photo-gallery_thumbnail-image-row">
          {images.map((i, index) => (
            <button
              className="shop-photo-gallery_thumbnail-image-wrapper"
              style={{ opacity: index === photoIndex ? 0.25 : 1 }}
              onClick={() => setPhotoIndex(index)}
            >
              <img src={i} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPhotoGallery;
