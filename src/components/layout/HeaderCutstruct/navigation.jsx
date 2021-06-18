import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import rqs from '../../../assets/img/common/Vector-RQS.png'
const Navigation = ({ aboutRef, productRef, serviceRef, contactRef }) => {
    const location = useLocation();
    return (
        <nav className="navigation">
            <ul>
                <span className="other_links visible-lg">
                    <li className="">
                        <Link to="/" onClick={(e) => {e.preventDefault(); aboutRef.current && aboutRef.current.scrollIntoView({ behavior: 'smooth' }) }} > <span>About Us </span></Link>
                    </li>
                    <li className="m-t-three ">
                        <Link to="/" onClick={(e) => {e.preventDefault(); serviceRef.current && serviceRef.current.scrollIntoView({ behavior: 'smooth' }) }} > <span>Services </span></Link>
                    </li>
                    <li className="m-t-three ">
                        <Link to="/" onClick={(e) => {e.preventDefault(); productRef.current && productRef.current.scrollIntoView({ behavior: 'smooth' }) }} > <span>Products </span></Link>
                    </li>
                    <li className="m-t-three ">
                        <Link to="/" onClick={(e) => {e.preventDefault(); contactRef.current && contactRef.current.scrollIntoView({ behavior: 'smooth' }) }} > <span>Contact Us </span></Link>
                    </li>
                </span>
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default Navigation;
