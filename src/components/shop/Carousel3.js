import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ShopItems } from './ShopItems';

function Carousel3() {

    return (
        <Carousel 
            showThumbs={false} 
            showStatus={false}
            infiniteLoop
            className="me-image3">
            <div>
                <img src={require('../../images/shop/dco2.jpg').default} />
            </div>
            
            <div>
                <img src={require('../../images/shop/dco3.jpg').default} />
            </div>
            <div>
                <img src={require('../../images/shop/dco4.jpg').default} />
            </div>
            <div>
                <img src={require('../../images/shop/img7.jpg').default} />
            </div>
            
        
        </Carousel>
    )
}

export default Carousel3;