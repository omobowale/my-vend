import React from 'react';
import PropTypes from 'prop-types';

function ToolTip({ text, object }) {
  return <div className={`tool-tip ${object ? 'object' : ''}`}>{text}</div>;
}

ToolTip.propTypes = {
  text: PropTypes.string,
  object: PropTypes.bool,
};

export default ToolTip;
