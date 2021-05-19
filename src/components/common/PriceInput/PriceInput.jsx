import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

function PriceInput({ onChange, defaultValue = '', name, ...rest }) {
  const valueChange = (values) => {
    const { value } = values;

    if (name) {
      onChange(name, value);
    } else {
      onChange(value);
    }
  };

  return (
    <NumberFormat
      thousandSeparator={true}
      displayType="input"
      defaultValue={defaultValue}
      decimalScale={2}
      onValueChange={valueChange}
      isNumericString
      min={1}
      minLength={1}
      {...rest}
    />
  );
}

PriceInput.propTypes = {
  onChange: PropTypes.func,
};

export default PriceInput;
