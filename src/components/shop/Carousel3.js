import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ShopItems } from "./ShopItems";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Carousel3() {
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
            <img src={require("../../images/shop/dco7.jpg").default} />
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
            <img src={require("../../images/shop/dco3.jpg").default} />
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
            <img src={require("../../images/shop/dco4.jpg").default} />
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
            <img src={require("../../images/shop/img7.jpg").default} />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </Carousel>
  );
}

export default Carousel3;
