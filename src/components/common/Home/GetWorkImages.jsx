import React, { useEffect } from 'react';
import image1 from '../../../assets/img/pages/1.jpg';
import image2 from '../../../assets/img/pages/2.jpg';
import image3 from '../../../assets/img/pages/3.jpg';
import image4 from '../../../assets/img/pages/4.jpg';
import { useState } from 'react';
import { useMemo } from 'react';

function GetWorkImages() {
  const [count, setCount] = useState(0);

  const images = useMemo(
    () => [
      { image: image1, alt: 'Find the Right Freelancer' },
      { image: image2, alt: 'Hire the Perfect Freelancer' },
      { image: image3, alt: 'Work Efficiently with Your Freelancer' },
      { image: image4, alt: 'Pay with Ease and Assurance' },
    ],
    []
  );

  const setCurrrentCount = () => {
    setCount((prevCount) => {
      return prevCount + 1 > 3 ? 0 : prevCount + 1;
    });
  };

  useEffect(() => {
    const changeInterval = setInterval(() => setCurrrentCount(), 3500);

    return () => clearInterval(changeInterval);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <img
          className={`get-work-images ${count === index ? 'active' : ''}`}
          src={image.image}
          alt={image.alt}
          key={image.alt}
        />
      ))}
    </>
  );
}

export default GetWorkImages;
