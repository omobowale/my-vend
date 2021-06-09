import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ signup, authenticated, openAuthPage, mouseOverMenuButton, mouseLeaveMenuButton, toggleMegaMenuStatus }) => {
    const location = useLocation();
    return (
        <>
            <nav className="navigation left">
                <ul>
                    <li className="m-t-three "  onMouseEnter={ () => mouseOverMenuButton('product') } onMouseLeave={ () => mouseLeaveMenuButton() } onClick={ () => toggleMegaMenuStatus('product') } >
                        <a href="javascript: false" >Products</a>
                    </li>
                    {/* <li className="m-t-three">
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
                    </li> */}
                </ul>
            </nav>
            
            <nav className="navigation">
                <ul>
                    {/* <li className="m-t-three">
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
                    </li> */}
                    {!authenticated &&
                        <li>
                            <a href="javascript: false"
                                onClick={() => openAuthPage('signup')}
                                className="btn btn-sign-up "
                            >
                                Register
                            </a>
                        </li>
                    }
                </ul>
            </nav>
        </>
    );
};

Navigation.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default Navigation;
