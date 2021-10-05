import React, { useState } from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import { setConfiguration } from "react-grid-system";
import Navbar from "../components/Navbar";
import WhiteFooter from "../components/WhiteFooter";
import Modal from "../components/shop/Modal";
import ModalItem1 from "../components/shop/ModalItem1";
import ModalItem2 from "../components/shop/ModalItem2";
import ModalItem3 from "../components/shop/ModalItem3";
import Modal2 from "../components/shop/Modal2";
import Slider from "../components/shop/Slider";
import { SliderData } from "../components/shop/SliderData";

//import shop items list
import teapotSticker from "../images/shop/teapot-sticker.png";
import dcoSticker from "../images/shop/dco-sticker.png";
import communityShirt from "../images/shop/community-shirt.png";

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

  // remove any padding from container
  setConfiguration({ gutterWidth: 0 });

  return (
    <div className="shop">
      <div className="shop-background"></div>
      <Navbar color={"#FFF"} altColor={"#000"} from="shop" />
      <div className="shop-banner">
        <div className="shop-content">
          <h1 className="shopbanner-title">Shop Design Co</h1>
          <p className="shopbanner-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            pellentesque in dignissim nisl arcu eget. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="order-form">
            <p>Order Form</p>
          </div>
        </div>
      </div>
      <div className="shop-gallery">
        <h2 className="shop-gallery-title">Browse Our Collection</h2>
        <div className="shop-gallery-items">
          <Container>
            <Row>
              <Col>
                <div className="shop-item">
                  <div
                    className="shop-item-img"
                    onClick={() => {
                      display1();
                    }}
                  >
                    <img alt="shop-item" src={dcoSticker} />
                  </div>
                  <h3>Design Co Sticker</h3>
                  <p>$20</p>
                </div>
              </Col>
              <Col>
                <div className="shop-item">
                  <div
                    className="shop-item-img"
                    onClick={() => {
                      display2();
                    }}
                  >
                    <img alt="shop-item" src={teapotSticker} />
                  </div>
                  <h3>Teapot Sticker</h3>
                  <p>$20</p>
                </div>
              </Col>
              <Col>
                <div className="shop-item">
                  <div
                    className="shop-item-img"
                    onClick={() => {
                      display3();
                    }}
                  >
                    <img alt="shop-item" src={communityShirt} />
                  </div>
                  <h3>Grow With Us</h3>
                  <p>$20</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Modal2
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

      <WhiteFooter></WhiteFooter>
    </div>
  );
}

export default Shop;
