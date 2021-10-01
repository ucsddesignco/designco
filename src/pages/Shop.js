import React, { useState } from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import { setConfiguration } from "react-grid-system";
import Navbar from "../components/Navbar";
import Modal from '../components/shop/Modal'

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
    }

  // remove any padding from container
  setConfiguration({ gutterWidth: 0 });

  return (
    <div>
      <div className="background-image"></div>
      {/* <Navbar from="shop" /> */}
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
                <div className="shop-item" >
                  <div className="shop-item-img" onClick={() => {display(0)}} >
                    <img alt="shop-item" src={dcoSticker} />
                  </div>
                  <h3>Design Co Sticker</h3>
                  <p>$20</p>
                </div>
              </Col>
              <Col>
                <div className="shop-item">
                  <div className="shop-item-img" onClick={() => {display(1)}} >
                    <img alt="shop-item" src={teapotSticker} />
                  </div>
                  <h3>Teapot Sticker</h3>
                  <p>$20</p>
                </div>
              </Col>
              <Col>
                <div className="shop-item">
                  <div className="shop-item-img" onClick={() => {display(2)}} >
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

      <Modal
            show={showModal}
            onHide={() => {hideModal()}} 
            index={index} 
        />   
        
    </div>
  );
}

export default Shop;
