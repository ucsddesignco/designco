import React, { useState } from "react";
import Navbar from "../components/Navbar";
import WhiteFooter from "../components/WhiteFooter";
import ShopOverlay from "../images/video/shop-overlay.mp4";
import herovid from "../images/video/hero.mp4";
import herodesktop from '../images/video/herodesktop.mp4';
import heromobile from '../images/video/heromobile.mp4';

//import shop items list
import carrot from "../images/shop/downchevron.svg";
import AutoTiles from "../components/AutoTiles/AutoTiles";
import AutoTile from "../components/AutoTiles/subcomponents/AutoTile";
import { ShopItem } from "../components/shop/ShopItem/ShopItem";
import { ShopModal } from "../components/shop/ShopModal/ShopModal";


function importAll(r) {
  return r.keys().map(r);
}
// Image Imports
const crewneck = importAll(require.context('../images/newshop/crewneck/', false, /\.(png|jpe?g|svg)$/));
const shirt = importAll(require.context('../images/newshop/shirt/', false, /\.(png|jpe?g|svg)$/));
const hero = importAll(require.context('../images/newshop/hero/', false, /\.(png|jpe?g|svg)$/));
const stickers = importAll(require.context('../images/newshop/sticker/', false, /\.(png|jpe?g|svg)$/));


const shopItems = [
  {
    title: "PLAY^3 Embroidered Crewneck",
    price: "$35",
    images: [
      crewneck[0].default,
      crewneck[1].default,
      crewneck[2].default,
      crewneck[3].default,
      crewneck[4].default,
      crewneck[5].default,
      crewneck[6].default,
      crewneck[7].default,
      crewneck[8].default,

    ],
    overlayImage: crewneck[1].default,
    description: (
      <>
        <p>
        Don’t be afraid to play around! It’s time to play, play, play to your heart’s content. 
        Grab your pencils and crayons — on your mark, get set, design!
        </p>
        <p>80/20 cotton/polyester blend; Alpine green</p>
        <p>Embroidered front design, screen-printed back design</p>
        <p>
          Models in order of appearance: Khoi is 5’6” wearing size M, 
          Brooke is 5’0” wearing size M, Nel is 5’5” wearing size S.
        </p>
        <p>Designed by Juna Kim</p>
      </>
    ),
    sizes: [
      { size: "S", available: true },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: true },
    ],
  },
  {
    title: "It’s OK to Make Mistakes Shirt",
    price: "$18",
    images: [
      shirt[0].default,
      shirt[1].default,
      shirt[2].default,
      shirt[3].default,
      shirt[4].default,
      shirt[5].default,
      shirt[6].default,
      shirt[7].default,
      shirt[8].default,

    ],
    overlayImage: shirt[1].default,

    description: (
      <>
        <p>
          Design doesn’t have to be stressful with the It’s OK to Make Mistakes shirt; 
          embrace your childlike imagination & have a silly little time.
        </p>
        <p>100% ring spun cotton; Bay green</p>
        <p>Screen-printed front and back design</p>
        <p>
          Models in order of appearance: Nel is 5’5” wearing size S, Brooke is 5’0” wearing size L, 
          Khoi is 5’6” wearing size M, Sahil is 6’1” wearing size M.
        </p>
        <p>Designed by Megan Tan</p>
      </>
    ),
    sizes: [
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: true },
    ],
  },
  {
    images: [
      stickers[1].default,
      stickers[0].default,
    ],
    overlayImage: stickers[0].default,
    title: "Design Co Black Holographic Logo Sticker",
    price: "$3.50",
    description: (
      <>
        <p>Rep Design Co with your very own DCo logo sticker – this time, in dark mode.</p>
        <p>2" x 2” holographic logo on glossy black background</p>
      </>
    ),
    sizes: [],
  },
  {
    images: [stickers[2].default, stickers[3].default,],
    overlayImage: stickers[3].default,
    title: "It’s Playtime! Holographic Sticker",
    price: "$4",
    description: (
      <>
        <p>There’s no time to clean up your desk when your brain is working on overdrive 
          sketching all your design ideas. Make a mess, and yoink this comic-style sticker!</p>
        <p>4” x 3” holographic</p>
        <p>Designed by Juna Kim</p>
      </>
    ),
    sizes: [],
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
      <div className="shop-background1">
        <video className="desktop" autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true">
          <source src={herodesktop} type="video/mp4" />
        </video>
      </div>
      <div className="shop-background2">
        <video className="mobile" autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true">
          <source src={heromobile} type="video/mp4" />
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSecWPKCjcOJ-Y5PvOUOEoLFXhgVHiHK-M6D8Wgiaw8dyHtnuw/viewform" target="_blank" rel="noreferrer">
              <div className="order-form">
                <p>Order Form</p>
              </div>
            </a>
            <a href="https://youtu.be/OxLXdaMO0Zc" target="_blank" rel="noreferrer">
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
        <h2 className="shop-gallery-title">Playtime Club for Designers Collection</h2>
        <div className="shop-gallery-items">
          <AutoTiles minWidth={250} space={40}>
            {shopItems.map((i, index) => (
              <AutoTile>
                <ShopItem
                  image={i.images[0]}
                  overlayImage={i.overlayImage}
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
        <ShopModal
          title={shopItems[modalIndex].title}
          price={shopItems[modalIndex].price}
          sizes={shopItems[modalIndex].sizes}
          images={shopItems[modalIndex].images}
          description={shopItems[modalIndex].description}
          onOverlayClick={hideModal}
          onCloseClick={hideModal}
        />
      )}
      <WhiteFooter />
    </div>
  );
}

export default Shop;
