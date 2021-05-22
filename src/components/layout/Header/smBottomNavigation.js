import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar/sidebar';
import MobileSearchForm from './Forms/MobileSearchForm';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo/logo.png'
import MegaMenu from './MegaMenu/MegaMenu';
import BottomNavigation from './BottomNavigation';

function SmBottomNavigator({
    signup,
    openAuthPage
}) {
    const [sidebar, setSidebar] = useState('');
    const [searchMode, setSearchMode] = useState('');
    const [mouseOverButton, setMouseOverButton] = useState(false);
    const [mouseOverMenu, setMouseOverMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState('product');

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

    const showSidebar = () => setSidebar('show');

    const hideSidebar = () => setSidebar('');

    const renderSidebar = () => {
        return (
            <Sidebar openAuthPage={openAuthPage} closeSidebar={hideSidebar} signup={signup} />
        );
    };

    const toggleSearchMode = () =>
        setSearchMode(searchMode === 'reveal' ? '' : 'reveal');

    return (
        <>
            <nav className="navigation">
                <ul>
                    <li>
                    
                        <a title="nav" href="#0" className="nav-sm">
                            <FontAwesomeIcon
                            icon={faBars}
                            size="lg"
                            onClick={showSidebar}
                            className="hamburger-sm"
                            />
                        </a>
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

            <div className={`sidebar ${sidebar}`}>
                <div className="side-content">
                    <FontAwesomeIcon
                    icon={faTimes}
                    size="lg"
                    onClick={hideSidebar}
                    className="close"
                    />

                    <nav className="sidebar-nav">{renderSidebar()}</nav>
                </div>
            </div>
        </>
    );
}

export default SmBottomNavigator;
