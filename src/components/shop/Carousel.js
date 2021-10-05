import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ShopItems } from './ShopItems';

function ImageCarousel(props) {

    const idx = props.index;
    const current_item = ShopItems[idx];


    


    

    return (
        <Carousel 
            showThumbs={true} 
            className="me-image" 
            infiniteLoop>
            <div>
                <img src={require('../../images/shop/community-shirt.png').default} className="me-image" />
            </div>
            <div>
                <img src={require('../../images/shop/community-shirt.png').default} className="me-image" />
            </div>
            <div>
                <img src={require('../../images/shop/community-shirt.png').default} className="me-image" />
            </div>
            <div>
                <img src={require('../../images/shop/community-shirt.png').default} className="me-image" />
            </div>
        
        </Carousel>
    )
}

export default ImageCarousel;