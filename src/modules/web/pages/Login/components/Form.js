import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FloatingText from '../../../../../components/common/Form/FloatingText'
import FloatingPassword from '../../../../../components/common/Form/FloatingPassword'

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
    remember,
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
                Sign In
            </button>
            <p >
                <span className="auth-nav-link">Forget password?</span>
            </p>
        </form>
    );
};

Form.displayName = displayName;
Form.propTypes = propTypes;

export default React.memo(Form);
