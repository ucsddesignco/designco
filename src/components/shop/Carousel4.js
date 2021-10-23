import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ShopItems } from "./ShopItems";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Carousel4() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      className="me-image3"
    >
      <div>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={100}
          defaultPositionY={200}
        >
          <TransformComponent>
            <img src={require("../../images/shop/card1.jpg").default} />
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={100}
          defaultPositionY={200}
        >
          <TransformComponent>
            <img src={require("../../images/shop/card2.jpg").default} />
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={100}
          defaultPositionY={200}
        >
          <TransformComponent>
            <img src={require("../../images/shop/card3.jpg").default} />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </Carousel>
  );
}

export default Carousel4;
