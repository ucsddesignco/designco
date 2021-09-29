import React from "react";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";
import Navbar from "../components/Navbar";

function Shop() {
  return (
    <div>
      <div className="background-image"></div>
      <Navbar from="shop" />
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
              <Col>hello</Col>
              <Col>hello</Col>
              <Col>hello</Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Shop;
