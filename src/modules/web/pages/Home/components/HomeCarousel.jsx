import React from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeCarousel({ media }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    className: 'slick-con',
  };
  return (
    <Slider {...settings}>
      {media.map((item) => {

        return item;
      })}
    </Slider>
  );
}

export default HomeCarousel;
