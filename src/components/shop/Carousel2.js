import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ShopItems } from './ShopItems';

function Carousel2(props) {

    const idx = props.index;
    const current_item = ShopItems[idx];

    return (
        <Carousel 
            showThumbs={false} 
            showStatus={false}
            className="me-image2" 
            infiniteLoop>
            <div>
                <img src={require('../../images/shop/teapot.jpg').default} className="sticker"/>
            </div>
            <div>
                <div className="me-image2-2" />
            </div>
        
        </Carousel>
    )
}

export default Carousel2;