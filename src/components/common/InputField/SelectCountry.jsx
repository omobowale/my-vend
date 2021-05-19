import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { requestApi } from "../../../utils/api";

function SelectCountry({ value, onChange, name, id, label, disabled = false }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const { data } = await requestApi("get", "countries");
      const withoutNoneSelected = data.filter((country) => country.id > 0);
      setCountries(withoutNoneSelected);
    }

    fetchCountries();
  }, []);

  const renderCountries = () => {
    if (countries.length < 1) {
      return (
        <>
          <label> {label} </label>
          <select>
            <option value="" defaultValue disabled>
              None Selected
            </option>
          </select>
        </>
      );
    } else {
      return (
        <>
          <label> {label} </label>
          <select
            onChange={onChange}
            value={value || 402}
            name={name}
            id={id}
            disabled={disabled}
          >
            {countries.map((country) => (
              <option value={country.id} key={country.id}>
                {" "}
                {country.name}{" "}
              </option>
            ))}
          </select>
        </>
      );
    }
  };

  return renderCountries();
}

SelectCountry.propTypes = {
  onChange: PropTypes.func,
};

export default SelectCountry;
