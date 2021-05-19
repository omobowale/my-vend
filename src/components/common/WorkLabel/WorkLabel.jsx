import React from 'react';
import PropTypes from 'prop-types';

import './WorkLabel.scss';

function WorkLabel({ label }) {
  return <div className="work_label"> {label} </div>;
}

WorkLabel.propTypes = {
  label: PropTypes.string
};

export default WorkLabel;
