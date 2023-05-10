import React from "react";
import "./ShopModal.scss";
import AutoTiles from "../../AutoTiles/AutoTiles";
import AutoTile from "../../AutoTiles/subcomponents/AutoTile";
import ShopSize from "../ShopSize/ShopSize";
import ShopPhotoGallery from "../ShopPhotoGallery/ShopPhotoGallery";
export const ShopModal = ({ onOverlayClick = () => {} }) => {
  return (
    <div className="shop-modal">
      <div className="shop-modal_overlay" onClick={onOverlayClick} />
      <div className="shop-modal_box-wrapper">
        <div className="shop-modal_box">
          <AutoTiles minWidth={250} space={40}>
            <AutoTile className="shop-modal_photos">
              <ShopPhotoGallery />
            </AutoTile>
            <AutoTile>
              <div className="shop-modal_details">
                <h1>Design Co Black Holographic Logo Sticker</h1>
                <span>$2,500</span>
                <a href="https://example.com">Order Form</a>
                <div className="shop-modal_available-sizes">
                  <span className="shop-modal_available-sizes-title">
                    Sizes Available
                  </span>
                  <div className="shop-modal_available-sizes-icons">
                    <ShopSize />
                    <ShopSize />
                    <ShopSize />
                  </div>
                </div>
                <div className="shop-modal_description">
                  <p>
                    Don’t be afraid to play around! It’s time to play, play,
                    play to your heart’s content. Grab your pencils and crayons
                    — on your mark, get set, design!
                  </p>
                  <p>80/20 cotton/polyester blend; Alpine green</p>
                  <p>Embroidered front design, screen-printed back design</p>
                  <p>Designed by Juna Kim</p>
                  <p>
                    Models in order of appearance: Khoi is 5’6” wearing size M,
                    Brooke is _’_” wearing size M,{" "}
                  </p>
                  <p>Designed by Juna Kim</p>
                  <p>
                    Models in order of appearance: Khoi is 5’6” wearing size M,
                    Brooke is _’_” wearing size M,{" "}
                  </p>
                </div>
              </div>
            </AutoTile>
          </AutoTiles>
        </div>
      </div>
    </div>
  );
};
