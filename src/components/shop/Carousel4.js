import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ShopItems } from './ShopItems';

function Carousel4() {

    return (
        <Carousel 
            showThumbs={false} 
            infiniteLoop
            className="me-image3">
                <div>
                    <img src={require('../../images/shop/card1.jpg').default} />
                </div>
                <div>
                    <img src={require('../../images/shop/card2.jpg').default} />
                </div>
                <div>
                    <img src={require('../../images/shop/card3.jpg').default} />
                </div>
              
        </Carousel>
    )
}

export default Carousel4;