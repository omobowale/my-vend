import React, { useEffect, useRef, useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LgSearchForm from './Forms/LgSearchForm';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import BottomNavigation from './BottomNavigation';
import Sidebar from './sidebar/sidebar';
import logo from '../../../assets/img/logo/logo.png'
import MegaMenu from './MegaMenu/MegaMenu';

function LgHeader({
    application,
    authenticated,
    dispatch,
    signup,
    openAuthPage,
}) {
    const [mode, setMode] = useState('');
    const [sidebar, setSidebar] = useState('');
    const [mouseOverButton, setMouseOverButton] = useState(false);
    const [mouseOverMenu, setMouseOverMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState('product');

    const wrapperRef = useRef(null);

    function useOutside(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                hideSidebar();
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

    const mouseOverMegaMenu = (menu) => {
        setMouseOverMenu(true);
    }

    const mouseOverMenuButton = (menu) => {
        setMouseOverButton(true);
        setActiveMenu(menu)
    }

    const mouseLeaveMenuButton = () => {
        setMouseOverButton(false);
    }

    const mouseLeaveMegaMenu = () => {
        setMouseOverMenu(false);
    }


    useOutside(wrapperRef);

    const changeMode = (mode) => setMode(mode);

    const showSidebar = () => setSidebar('show');

    const hideSidebar = () => setSidebar('');

    const renderSidebar = () => {
        return (
            <Sidebar closeSidebar={hideSidebar} openAuthPage={openAuthPage} signup={signup} />
        );
    };

    const renderNavigation = () => {
        return (
            <Navigation openAuthPage={openAuthPage} signup={signup} />
        );
    };

    return (
        <header className={`header ${mode}`}>
            <div className="header-top">
                <div className="container clearfix">
                    
                    <Link to={'/'} className="logo mr-5">
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                    <LgSearchForm changeMode={changeMode} />
                    {renderNavigation()}
                </div>
                <div className={`sidebar ${sidebar}`}>
                    <div className="side-content" ref={wrapperRef}>
                        <FontAwesomeIcon
                            icon={faTimes}
                            size="lg"
                            onClick={hideSidebar}
                            className="close"
                        />

                        <nav className="sidebar-nav">{renderSidebar()}</nav>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container clearfix">
                    <BottomNavigation  openAuthPage={openAuthPage} 
                        mouseLeaveMenuButton={mouseLeaveMenuButton} mouseOverMenuButton={mouseOverMenuButton} />
                </div>
                <div
                    className={
                        mouseOverButton || mouseOverMenu
                            ? "megamenu-container"
                            : "hide-megamenu-container"
                    }
                >
                    <MegaMenu mouseLeaveMegaMenu={mouseLeaveMegaMenu} mouseOverMegaMenu={mouseOverMegaMenu} />
                </div>

            </div>
        </header>
    );
}

export default LgHeader;
