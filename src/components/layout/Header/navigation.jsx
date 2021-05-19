import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ signup, openAuthPage }) => {
    const location = useLocation();
    return (
        <nav className="navigation">
            <ul>
                <span className="other_links pull-left visible-lg">
                    <li className="m-t-three ">
                        <Link to="/">Request Quantity Survey</Link>
                    </li>
                    <li className="m-t-three">
                        <Link to="/">
                            Construction Consultation
                        </Link>
                    </li>
                </span>
                <li className="m-t-three">
                    <a href="javascript: false"
                        onClick={() => openAuthPage('login')}
                    >
                        Sign in
                    </a>
                </li>
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default Navigation;
