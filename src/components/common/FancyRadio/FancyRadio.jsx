import React from 'react';
import PropTypes from 'prop-types';

import './FancyRadio.scss';

function FancyRadio({
  value,
  checked,
  onChange,
  labelSub,
  labelMain,
  name,
  ...rest
}) {
  return (
    <div
      className={`form-check pointer fancy-radio ${checked ? 'checked' : ''}`}
      onClick={() => onChange(name, value)}
    >
      <label htmlFor={name} className="check-container">
        <p className="bold main-label">{labelMain}</p>

        <span> {labelSub} </span>
        {/* <input
          type="radio"
          value={value}
          checked={checked}
          onChange={}
          name={name}
          {...rest}
        /> */}
        <span className="radio-mark"></span>
      </label>
    </div>
  );
}

FancyRadio.propTypes = {
  checked: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  labelMain: PropTypes.string.isRequired,
  labelSub: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FancyRadio;
