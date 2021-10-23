import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ShopItems } from "./ShopItems";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Carousel2(props) {
  const idx = props.index;
  const current_item = ShopItems[idx];

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      className="me-image2"
      infiniteLoop
    >
      <div>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={100}
          defaultPositionY={200}
        >
          <TransformComponent>
            <img src={require("../../images/shop/teapot.jpg").default} />
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
            <img src={require("../../images/shop/dco9.jpg").default} />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </Carousel>
  );
}

export default Carousel2;
