import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import logo from '../../../assets/img/logo/logo.png';
import logo2 from '../../../assets/img/logo/cutstruct-logo.png';

function LgHeader(props) {
    
    const wrapperRef = useRef(null);

    function useOutside(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                // hideSidebar();
                }
            }
            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    useOutside(wrapperRef);

    const renderNavigation = () => {
        return (
            <Navigation 
                aboutRef={props.aboutRef}
                serviceRef={props.serviceRef}
                contactRef={props.contactRef}
                productRef={props.productRef}
            />
        );
    };

    return (
        <header className={`header-cutstruct `}>
            <div className="header-cutstruct-top" >
                <div className="header-cutstruct-top-container clearfix">
                    <div className="logo-container">
                        
                        <Link to={'/'} className="other-app-logo logo">
                            <span>Back To</span>
                            <img
                                src={logo}
                                className="img-fluid"
                                alt="logo"
                            />
                        </Link>
                        <Link to={'/cutstruct'} className="logo">
                            <img
                                src={logo2}
                                className="img-fluid"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    {renderNavigation()}
                </div>
            </div>
        </header>
    );
}

export default LgHeader;
