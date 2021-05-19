import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

function ToggleSwitch({ checked, onChange, ...rest }) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      {...rest}
      height={rest.height || 20}
      width={rest.width || 45}
    />
  );
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
