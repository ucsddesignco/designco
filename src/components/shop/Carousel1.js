import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ShopItems } from "./ShopItems";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Carousel1(props) {
  const idx = props.index;
  const current_item = ShopItems[idx];

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop
    >
      <div>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={100}
          defaultPositionY={200}
        >
          <TransformComponent>
            <img src={require("../../images/shop/holosticker.jpg").default} />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </Carousel>
  );
}

export default Carousel1;
