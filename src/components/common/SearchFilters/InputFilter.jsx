import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCurrency } from '../../../hooks/useCurrency';

function InputFilter(props) {
  const [value, setValue] = useState('');
  const divider = useCurrency('divider', false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleSubmit(
      props.query,
      props.id === 'price' ? divider * value : value
    );
  };

  return (
    <form onSubmit={handleSubmit} className="input-item">
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type={props.type}
        id={props.id}
        value={value}
        onChange={handleChange}
        placeholder={props.placeholder}
        max={props.max}
        min={0}
        maxLength={7}
      />
    </form>
  );
}

InputFilter.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  handleSubmit: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputFilter;
