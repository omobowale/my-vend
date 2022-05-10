import React from "react";
import PropTypes from "prop-types";

const displayName = "FloatingFormTextField";
const propTypes = {
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

const FloatingText = ({
    name,
    label,
    value,
    errors,
    onChange,
    className='',
    required = false
}) => {
    return (
        <div className={`form-group floating-label ${className}`}>
            <label htmlFor={name} className="sr-only">
                {label}
            </label>
            <input
                type="text"
                className={`floating-input rounded-0 ${errors.has({
                    name
                }) && "is-invalid"}`}
                name={name}
                id={name}
                placeholder=" "
                value={value || ""}
                required={required}
                onChange={e => onChange(e.target.name, e.target.value)}
            />
            <label className="label">{label}</label>
            {errors.has(`${name}`) && (
                <div className="invalid-feedback">
                    {errors.first(`${name}`)}
                </div>
            )}
        </div>
    );
};

FloatingText.displayName = displayName;
FloatingText.propTypes = propTypes;

export default FloatingText;
