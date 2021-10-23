import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ShopItems } from './ShopItems';

function ImageCarousel(props) {

    const idx = props.index;
    const current_item = ShopItems[idx];

    return (
        <Carousel 
            showThumbs={false} 
            className="me-image" 
            infiniteLoop>
            <div>
                <img src={current_item.img1.default} />
            </div>
            <div>
                <img src={current_item.img2.default} />
            </div>
            <div>
                <img src={current_item.img3.default} />
            </div>
            <div>
                <img src={current_item.img4.default} />
            </div>
        
        </Carousel>
    )
}

export default ImageCarousel;