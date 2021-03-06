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
import RequestConsultance from '../../../modules/web/pages/RequestConsultance';

function LgHeader({
    application,
    userLogout,
    authenticated,
    dispatch,
    signup,
    user,
    openAuthPage,
}) {
    const [mode, setMode] = useState('');
    const [sidebar, setSidebar] = useState('');
    const [consultation, openConsultation] = useState(false);
    const [mouseOverButton, setMouseOverButton] = useState(false);
    const [mouseOverMenu, setMouseOverMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState('product');

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

    const mouseOverMegaMenu = (menu) => {
        // setMouseOverMenu(true);
    }

    const mouseOverMenuButton = (menu) => {
        setMouseOverButton(true);
        setActiveMenu(menu)
    }

    const mouseLeaveMenuButton = () => {
        // setMouseOverButton(false);
    }

    const mouseLeaveMegaMenu = () => {
        // setMouseOverMenu(false);
    }

    const toggleMegaMenuStatus = (menu) => {
        if(activeMenu == menu && mouseOverButton){
            setMouseOverButton(false);
            setActiveMenu(menu);
        }else{
            setMouseOverButton(true);
            setActiveMenu(menu)
        }
    }

    const closeMegaMenu = () => {
        setMouseOverButton(false);    
    }


    useOutside(wrapperRef);

    const changeMode = (mode) => setMode(mode);


    const renderNavigation = () => {
        return (
            <Navigation userLogout={userLogout} user={user} openAuthPage={openAuthPage} authenticated={authenticated} openConsultation={() => openConsultation(true)} />
        );
    };

    return (
        <header className={`header ${mode}`}>
            <div className="header-top" onClick={() => closeMegaMenu()}>
                <div className="header-top-container clearfix">
                    
                    <Link to={'/'} className="logo">
                        <img
                            src={logo}
                            className="img-fluid"
                            alt="logo"
                        />
                    </Link>
                    <LgSearchForm changeMode={changeMode} />
                    {renderNavigation()}
                </div>
            </div>
            <div className="header-bottom">
                <div className="container sm-container clearfix">
                    <BottomNavigation  openAuthPage={openAuthPage} authenticated={authenticated}
                        mouseLeaveMenuButton={mouseLeaveMenuButton} mouseOverMenuButton={mouseOverMenuButton} toggleMegaMenuStatus={toggleMegaMenuStatus} />
                </div>
                <div
                    className={ `megamenu-container 
                        ${mouseOverButton || mouseOverMenu
                            ? "show-megamenu-container"
                            : "hide-megamenu-container"}
                    `}
                    onClick={() => closeMegaMenu() }
                >
                    <MegaMenu mouseLeaveMegaMenu={mouseLeaveMegaMenu} mouseOverMegaMenu={mouseOverMegaMenu} closeMegaMenu={closeMegaMenu} />
                </div>
                <RequestConsultance show={consultation} onHide={() => openConsultation(false)} />

            </div>
        </header>
    );
}

export default LgHeader;
