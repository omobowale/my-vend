import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FloatingText from '../../../../../components/common/Form/FloatingText'
import FloatingPassword from '../../../../../components/common/Form/FloatingPassword'
import FloatingDropdown from '../../../../../components/common/Form/FloatingDropdown'

const displayName = "LoginForm";
const propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    remember: PropTypes.bool,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

const Form = ({
    email,
    password,
    first_name,
    last_name,
    role,
    errors,
    handleChange,
    handleSubmit
}) => {
    const styles = useMemo(() => ({
        root: {
            textAlign: "center",
            width: "300px",
            marginTop: "30px"
        },
        input: {
            fontSize: "0.7rem"
        },
        button: {
            marginBottom: "20px",
            marginTop: "30px"
            
        }
    }));

    return (
        <form
            className="form"
            style={styles.root}
            role="form"
            onSubmit={handleSubmit}
            noValidate
        >
            
            {/* <FloatingDropdown
                label="Role"
                name="role"
                showLabel={false}
                list={[{name: 'User'}, {name: 'Supplier'}, {name: 'Contractor'}]}
                value={role}
                displayField='name'
                field='name'
                errors={errors}
                onChange={handleChange}
            /> */}
            
            <FloatingText
                label="First Name"
                name="first_name"
                value={first_name}
                errors={errors}
                onChange={handleChange}
            />

            <FloatingText
                label="Last Name"
                name="last_name"
                value={last_name}
                errors={errors}
                onChange={handleChange}
            />

            <FloatingText
                label="Email"
                name="email"
                value={email}
                errors={errors}
                onChange={handleChange}
            />

            <FloatingPassword
                label="Password"
                name="password"
                value={password}
                errors={errors}
                onChange={handleChange}
            />
            
            <button
                style={styles.button}
                className="btn login-btn btn-block"
                type="submit"
                disabled={errors.any()}
            >
                Create Account
            </button>
        </form>
    );
};

Form.displayName = displayName;
Form.propTypes = propTypes;

export default React.memo(Form);
