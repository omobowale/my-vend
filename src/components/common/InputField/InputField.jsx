import React from 'react';
import PropTypes from 'prop-types';

function InputField({
  label,
  id = '',
  onChange,
  value = '',
  placeholder,
  type,
  ...rest
}) {
  return (
    <>
      {label && <label htmlFor={id || ''}> {label} </label>}
      <input
        type={type || 'text'}
        id={id}
        onChange={onChange}
        placeholder={placeholder || ''}
        value={value || ''}
        {...rest}
      />
    </>
  );
}

InputField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string
};

export default InputField;
