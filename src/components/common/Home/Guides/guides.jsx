import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import explore1 from '../../../../assets/img/blog/explore1.png';
import explore2 from '../../../../assets/img/blog/explore2.jpg';
import explore3 from '../../../../assets/img/blog/explore3.jpg';

const Guides = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    className: 'slicky',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="guides-container no-scrollbar">
      <Slider {...settings}>
        <div className="guides-post" data-index="3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://blog.terawork.com/why-you-should-not-leave-a-graphic-designer-to-his-her-ideas/"
          >
            <div
              className="guides-post--image"
              style={{
                backgroundImage: `url(${explore3})`,
              }}
            ></div>
            <h3>
              Why You Should Not Leave a Graphic Designer to His/Her Ideas
            </h3>
          </a>
        </div>
        <div className="guides-post" data-index="1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://blog.terawork.com/the-ultimate-guide-to-increasing-productivity-when-working-with-a-freelancer/"
          >
            <div
              className="guides-post--image"
              style={{
                backgroundImage: `url(${explore1})`,
              }}
            ></div>
            <h3>
              The Ultimate Guide to Increasing Productivity When Working With a
              Freelancer
            </h3>
          </a>
        </div>
        <div className="guides-post" data-index="2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://blog.terawork.com/10-high-paying-jobs-you-can-do-from-home-in-2019/"
          >
            <div
              className="guides-post--image"
              style={{ backgroundImage: `url(${explore2})` }}
            ></div>
            <h3>10 High Paying Jobs You Can Do from Home in 2019</h3>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Guides;
