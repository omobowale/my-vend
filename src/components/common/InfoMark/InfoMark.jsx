import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import './InfoMark.scss';

function InfoMark({ info }) {
  const [show, setShow] = useState(false);

  const toggleInfo = () => {
    setShow(!show);
  };

  return (
    <span className="info-holder">
      <FontAwesomeIcon icon={faQuestionCircle} onClick={toggleInfo} />

      {show ? <span className="info">{info}</span> : null}
    </span>
  );
}

InfoMark.propTypes = {
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default InfoMark;
