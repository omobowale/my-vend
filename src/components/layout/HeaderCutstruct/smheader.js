import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo/logo.png';
import logo2 from '../../../assets/img/logo/cutstruct-logo.png';

function SmHeader({aboutRef, contactRef, productRef, serviceRef}) {

    return (
        <>
            <header className={`header-cutstruct `}>
                <div className="container sm-container cutstruct-container">
                    <div className="header-cutstruct-flex">
                        <div className="logo-container">
                            
                            <Link to={'/'} className="other-app-logo logo-sm">
                                <span>Back To</span>
                                <img
                                    src={logo}
                                    className="img-fluid"
                                    alt="logo"
                                />
                            </Link>
                            <Link to={'/cutstruct'} className="logo-sm">
                                <img
                                    src={logo2}
                                    className="img-fluid"
                                    alt="logo"
                                />
                            </Link>
                        </div>

                        <div className="user_online">
                            <div className="btn-group user_profile">
                                <button
                                    type="button"
                                    className="btn btn-sm top-nav-menu-icon"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <FontAwesomeIcon
                                    icon={faEllipsisV}
                                    size="lg"
                                    className="hamburger-sm"
                                    />
                                
                                </button>

                                <div className="dropdown-menu top-nav-menu">
                                    <li className="dropdown-item">
                                        <Link to="/" onClick={(e) => {e.preventDefault(); aboutRef.current && aboutRef.current.scrollIntoView({ behavior: 'smooth' }) }} > <span>About Us </span></Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <Link to="/" onClick={(e) => {e.preventDefault(); serviceRef.current && serviceRef.current.scrollIntoView({ behavior: 'smooth' }) }} > <span>Services </span></Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <Link to="/" onClick={(e) => {e.preventDefault(); productRef.current && productRef.current.scrollIntoView({ behavior: 'smooth' }) }} > <span>Products </span></Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <Link to="/" onClick={(e) => {e.preventDefault(); contactRef.current && contactRef.current.scrollIntoView({ behavior: 'smooth' }) }} > <span>Contact Us </span></Link>
                                    </li>

    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
            </header>

        </>
    );
}

export default SmHeader;
