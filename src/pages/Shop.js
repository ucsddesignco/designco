import React, { useState } from "react";
import Navbar from "../components/Navbar";
import WhiteFooter from "../components/WhiteFooter";
import ShopOverlay from "../images/video/shop-overlay.mp4";

//import shop items list
import carrot from "../images/shop/downchevron.svg";
import AutoTiles from "../components/AutoTiles/AutoTiles";
import AutoTile from "../components/AutoTiles/subcomponents/AutoTile";
import { ShopItem } from "../components/shop/ShopItem/ShopItem";
import { ShopModal } from "../components/shop/ShopModal/ShopModal";
const shopItems = [
  {
    title: "PLAY3 Embroidered Crewneck",
    price: "$35,000",
    description: "My description...",
  },
  {
    title: "It’s OK to Make Mistakes Shirt",
    price: "$1,800",
    description: "My description...",
  },
  {
    title: "Design Co Black Holographic Logo Sticker",
    price: "$2,000",
    description: "My description...",
  },
  {
    title: "It’s Playtime! Holographic Sticker",
    price: "$3,000",
    description: "My description...",
  },
];

function Shop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleShopItemClick = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="shop">
      <div className="shop-background">
        <video autoPlay loop muted>
          <source src={ShopOverlay} type="video/mp4" />
        </video>
      </div>
      <Navbar color={"#FFF"} altColor={"#000"} from="shop" />
      <div className="shop-banner">
        <div className="shop-content">
          <h1 className="shopbanner-title">Shop Design Co</h1>
          <p className="shopbanner-description">
            Design Co is the Playtime Club for Designers where there are no
            rules. Play, explore, and have a silly little time. It’s ok to make
            mistakes along the way!
          </p>
          <div className="shop-container-button">
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <div className="order-form">
                <p>Order Form</p>
              </div>
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <div className="order-form">
                <p>Lookbook</p>
              </div>
            </a>
          </div>
          <a href="#gallery-section">
            <img src={carrot} alt="" className="carrot" />
          </a>
        </div>
      </div>
      <div className="shop-gallery" id="gallery-section">
        <h2 className="shop-gallery-title">Browse Our Collection</h2>
        <div className="shop-gallery-items">
          <AutoTiles minWidth={250} space={40}>
            {shopItems.map((i, index) => (
              <AutoTile>
                <ShopItem
                  index={index}
                  title={i.title}
                  price={i.price}
                  onClick={handleShopItemClick}
                />
              </AutoTile>
            ))}
          </AutoTiles>
        </div>
      </div>
      {isModalOpen && (
        <ShopModal onOverlayClick={hideModal} onCloseClick={hideModal} />
      )}

      <WhiteFooter />
    </div>
  );
}

export default Shop;
