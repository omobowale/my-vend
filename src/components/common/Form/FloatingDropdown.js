import React from "react";
import PropTypes from "prop-types";

const displayName = "FloatingDropdownFormField";
const propTypes = {
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

const FloatingDropdown = ({
    name,
    label,
    value,
    errors,
    onChange,
    list,
    field = "id",
    displayField = "name",
    className='',
    showLabel=true,
    required = false
}) => {
    return (
        <div className={`form-group floating-label ${className}`}>
            <label htmlFor={name} className="sr-only">
                {label}
            </label>
            <select
                className={`floating-select ${errors.has({ name }) &&
                    "is-invalid"}`}
                name={name}
                id={name}
                placeholder=" "
                required={required}
                value={value || ""}
                onChange={e => onChange(e.target.name, e.target.value)}
            >
                <option value="">Select {label} </option>
                {list.map((item, index) => (
                    <option key={index} value={item[field]}>
                        {item[displayField]}
                    </option>
                ))}
            </select>

            {showLabel && <label className="label">{label}</label> }
            {errors.has(`${name}`) && (
                <div className="invalid-feedback">
                    {errors.first(`${name}`)}
                </div>
            )}
        </div>
    );
};

FloatingDropdown.displayName = displayName;
FloatingDropdown.propTypes = propTypes;

export default React.memo(FloatingDropdown);
