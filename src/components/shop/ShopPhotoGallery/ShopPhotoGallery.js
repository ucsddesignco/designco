import React from "react";
import "./ShopPhotoGallery.scss";
import { useState } from "react";

const ShopPhotoGallery = ({ images = [] }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div>
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
  );
};

export default ShopPhotoGallery;
