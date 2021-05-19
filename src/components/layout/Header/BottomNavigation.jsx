import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ signup, openAuthPage, mouseOverMenuButton, mouseLeaveMenuButton }) => {
    const location = useLocation();
    return (
        <>
            <nav className="navigation left">
                <ul>
                    <li className="m-t-three "  onMouseEnter={ () => mouseOverMenuButton('product') } onMouseLeave={ () => mouseLeaveMenuButton() }>
                        <Link to="/">Products</Link>
                    </li>
                    <li className="m-t-three">
                        <Link to="/">
                            Suppliers
                        </Link>
                    </li>
                    <li className="m-t-three">
                        <Link to="/">
                            Constractors
                        </Link>
                    </li>
                    <li className="m-t-three">
                        <Link to="/">
                            Services
                        </Link>
                    </li>
                </ul>
            </nav>
            
            <nav className="navigation">
                <ul>
                    <li className="m-t-three">
                        <Link
                            to={{
                            pathname: '/login',
                            state: { from: location },
                            }}
                        >
                            Enterprise App
                        </Link>
                    </li>
                    <li className="m-t-three">
                        <Link
                            to={{
                            pathname: '/login',
                            state: { from: location },
                            }}
                        >
                            About Cutstruct
                        </Link>
                    </li>

                    <li>
                        <a href="javascript: false"
                            onClick={() => openAuthPage('signup')}
                            className="butn butn--gray"
                        >
                            Register
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

Navigation.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default Navigation;
