import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { withRouter, useHistory } from 'react-router-dom';

import './BackButton.scss';

function BackButton() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="back-button" onClick={goBack}>
      <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
      <span> Back </span>
    </div>
  );
}

export default withRouter(BackButton);
