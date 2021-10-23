import React, { useState } from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import { Grid } from "@material-ui/core";
import { setConfiguration } from "react-grid-system";
import Navbar from "../components/Navbar";
import WhiteFooter from "../components/WhiteFooter";
import Modal from "../components/shop/Modal";
import ModalItem1 from "../components/shop/ModalItem1";
import ModalItem2 from "../components/shop/ModalItem2";
import ModalItem3 from "../components/shop/ModalItem3";
import ModalItem4 from "../components/shop/ModalItem4";
import Modal2 from "../components/shop/Modal2";
import Slider from "../components/shop/Slider";
import { SliderData } from "../components/shop/SliderData";
import ShopOverlay from "../images/video/shop-overlay.mp4";

//import shop items list
import teapotSticker from "../images/shop/item2thumb.jpg";
import dcoSticker from "../images/shop/item4thumb.jpg";
import communityShirt from "../images/shop/dco8.jpg";
import playPrint from "../images/shop/cardthumb.jpg";

function Shop() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(-1);

  const hideModal = () => {
    setShowModal(false);
  };

  const display = (value) => {
    setIndex(value);
    setShowModal(true);
  };

  const [showModal1, setShowModal1] = useState(false);

  const display1 = () => {
    setShowModal1(true);
  };

  const hideModal1 = () => {
    setShowModal1(false);
  };

  const [showModal2, setShowModal2] = useState(false);

  const display2 = () => {
    setShowModal2(true);
  };

  const hideModal2 = () => {
    setShowModal2(false);
  };

  const [showModal3, setShowModal3] = useState(false);

  const display3 = () => {
    setShowModal3(true);
  };

  const hideModal3 = () => {
    setShowModal3(false);
  };

  const [showModal4, setShowModal4] = useState(false);

  const display4 = () => {
    setShowModal4(true);
  };

  const hideModal4 = () => {
    setShowModal4(false);
  };

  // remove any padding from container https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
  setConfiguration({ gutterWidth: 0 });

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
          From DSGN 1 to design degree, you’ll have to explain what you do all the time. Start your conversations with the Design Co Starter Pack. We promise it’s easier than reciting your lecture notes (if you actually took any).
          </p>
          <div className="shop-container-button">
            <a href="https://forms.gle/gQnXjP4ENVaXoKGn9" target="_blank">
              <div className="order-form">
                <p>Order Form</p>
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=B6xcCJxP1Wg" target="_blank">
              <div className="order-form">
                <p>Lookbook</p>
              </div>
            </a>
          </div>
          
        </div>
      </div>
      <div className="shop-gallery">
        <h2 className="shop-gallery-title">Browse Our Collection</h2>
        <div className="shop-gallery-items">
          <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4} className="item">
                <div className="shop-item">
                  <div
                    className="shop-item-img"
                    onClick={() => {
                      display3();
                    }}
                  >
                    <img alt="shop-item" src={communityShirt} />
                  </div>
                  <h3>A Design Co Story(board) Tee</h3>
                  <p>$15</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} className="item">
                <div className="shop-item">
                  <div
                    className="shop-item-img"
                    onClick={() => {
                      display2();
                    }}
                  >
                    <img alt="shop-item" src={teapotSticker} />
                  </div>
                  <h3>Design Co Holographic Nanna Teapot Sticker</h3>
                  <p>$2</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} className="item">
                <div className="shop-item">
                  <div
                    className="shop-item-img"
                    onClick={() => {
                      display1();
                    }}
                  >
                    <img alt="shop-item" src={dcoSticker} />
                  </div>
                  <h3>Design Co Holographic Logo Sticker</h3>
                  <p>$2</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} className="item">
                <div className="shop-item">
                  <div
                    className="shop-item-img"
                    onClick={() => {
                      display4();
                    }}
                  >
                    <img alt="shop-item" src={playPrint} />
                  </div>
                  <h3>DCo PLAY Print</h3>
                  <p>$1</p>
                </div>
              </Grid>
          </Grid>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={() => {
          hideModal();
        }}
        index={index}
      />

      <ModalItem1
        show={showModal1}
        onHide={() => {
          hideModal1();
        }}
      />

      <ModalItem2
        show={showModal2}
        onHide={() => {
          hideModal2();
        }}
      />

      <ModalItem3
        show={showModal3}
        onHide={() => {
          hideModal3();
        }}
      />

<ModalItem4
        show={showModal4}
        onHide={() => {
          hideModal4();
        }}
      />

      <WhiteFooter></WhiteFooter>
    </div>
  );
}

export default Shop;
