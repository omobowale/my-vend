import React from 'react';
import PropTypes from 'prop-types';

import './InfoCard.scss';

function InfoCard({ title, sub, children, size = '', id }) {
  return (
    <div className={`pane-block ${size}`} id={id || ''}>
      <div className="pane-title">
        <h3> {title} </h3>
        <h4> {sub} </h4>
      </div>
      <div className="pane-body">{children}</div>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
};

export default InfoCard;
