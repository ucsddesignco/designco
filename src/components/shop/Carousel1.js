import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ShopItems } from './ShopItems';

function Carousel1(props) {

    const idx = props.index;
    const current_item = ShopItems[idx];

    return (
        <Carousel 
            showThumbs={false} 
            showStatus={false}
            showIndicators={false}
            infiniteLoop>
            <img src={require('../../images/shop/item4big.jpg').default} />
        
        </Carousel>
    )
}

export default Carousel1;