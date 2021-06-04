import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import rqs from '../../../assets/img/common/Vector-RQS.png'
const Navigation = ({ signup, openAuthPage }) => {
    const location = useLocation();
    return (
        <nav className="navigation">
            <ul>
                <span className="other_links pull-left visible-lg">
                    {/* <li className="m-t-three ">
                        <Link to="/"> <span><img src={rqs}/> </span> <span>Request Quantity Survey </span></Link>
                    </li> */}
                    <li className="m-t-three">
                        <a href="javascript: false"
                            onClick={() => openAuthPage('login')}
                        >
                            <span><img src={rqs}/> </span> <span> Construction Consultation </span>
                        </a>
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
