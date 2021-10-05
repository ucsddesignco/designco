import React, { useState } from 'react';
import ShopItems from './ShopItems';
import { SliderData } from './SliderData';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = 4;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <img src={require('../../images/shop/left-arrow.svg').default} className='left-arrow' onClick={prevSlide} />
      <img src={require('../../images/shop/right-arrow.svg').default} className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide) => {
        return (
          <div>
            
              <img src={slide.small_images[current].default} alt='travel image' className='slider-image' />
            
          </div>
        );
      })}
    </div>
  );
};

export default Slider;