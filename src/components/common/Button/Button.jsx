import React from 'react';
import PropTypes from 'prop-types';
import ButtonSpinner from '../Spinner/ButtonSpinner';

function Button({
  type,
  onClick,
  text,
  color,
  loading,
  className,
  style,
  disabled,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`butn butn--${color} ${className}`}
      style={style}
      disabled={disabled}
    >
      {loading ? <ButtonSpinner /> : <>{text} </>}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
