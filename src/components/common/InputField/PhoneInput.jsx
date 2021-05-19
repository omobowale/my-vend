import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function PhoneInput({
  label,
  id = '',
  onChange,
  value = '',
  placeholder,
  country,
  ...rest
}) {
  return (
    <>
      {label && <label htmlFor={id || ''}> {label} </label>}
      <Input
        id={id}
        onChange={(value) => onChange(value)}
        placeholder={placeholder || ''}
        value={value || ''}
        country={country}
        {...rest}
      />
    </>
  );
}

PhoneInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default PhoneInput;
