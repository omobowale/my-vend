import React from 'react';
import PropTypes from 'prop-types';
import './TopInfo.scss';

function TopInfo({ active, children }) {
  return active ? (
    <div className="top-info-wrapper">
      <div className="container">
        <div className="top-info">{children}</div>
      </div>
    </div>
  ) : null;
}

TopInfo.propTypes = {
  active: PropTypes.bool
};

export default TopInfo;
