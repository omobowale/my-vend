import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ label, id, onChange, value, placeholder, ...rest }) {
  return (
    <>
      {label && <label htmlFor={id || ''}> {label} </label>}
      <textarea
        id={id}
        onChange={onChange}
        placeholder={placeholder || ''}
        value={value}
        {...rest}
      />
    </>
  );
}

TextArea.propTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default TextArea;
