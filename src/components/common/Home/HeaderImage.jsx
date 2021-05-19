import React, { Component, Fragment } from 'react';

import image3 from '../../../assets/img/models/3.png';
import image4 from '../../../assets/img/models/4.png';
import image5 from '../../../assets/img/models/5.png';
import image6 from '../../../assets/img/models/6.png';

class HeaderImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: {}
    };
  }

  componentDidMount = () => {
    let selectedImage = this.selectRandomImage();
    this.setState({ selectedImage: selectedImage });
  };

  selectRandomImage = () => {
    const images = [
      { image: image3, size: 'normal' },
      { image: image4, size: 'increase-sm' },
      { image: image5, size: 'normal' },
      { image: image6, size: 'increase-lg' }
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  render() {
    const { selectedImage } = this.state;
    return (
      <Fragment>
        <img
          src={selectedImage.image}
          alt="a freelancer"
          className={`visible-lg ${selectedImage.size}`}
        />
      </Fragment>
    );
  }
}

export default HeaderImage;
