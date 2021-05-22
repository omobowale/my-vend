import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar/sidebar';
import MobileSearchForm from './Forms/MobileSearchForm';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo/logo.png'
import MegaMenu from './MegaMenu/MegaMenu';
import SmBottomNavigation from './smBottomNavigation';
import rqs from '../../../assets/img/common/Vector-RQS.png'

function SmHeader({
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
        <header className={`header ${searchMode}`}>
            <div className="container">
                <div className="header-flex">
                    
                    <Link to={'/'} className="logo-sm">
                        <img
                        src={logo}
                        alt="logo"
                        />
                    </Link>

                    <div className="btn-group">
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
                                <Link to="/"> <span><img src={rqs}/> </span> <span>Request Quantity Survey </span></Link>
                            </li>
                            <li className="dropdown-item">
                                <Link to="/"> <span><img src={rqs}/> </span> <span> Construction Consultation </span> </Link>
                            </li>
                            <li className="dropdown-item">
                                <a href="javascript: false" className="sign-in-nav" 
                                    onClick={() => openAuthPage('login')}
                                >
                                    Sign in 
                                </a>
                            </li>
                        </div>
                    </div>
                
                </div>
                <div className="header-flex">
                    <MobileSearchForm toggleSearchMode={toggleSearchMode} />
                </div>
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
            </div>
            <div className="header-bottom">
                <div className="container clearfix">
                    <SmBottomNavigation  openAuthPage={openAuthPage} 
                        mouseLeaveMenuButton={mouseLeaveMenuButton} mouseOverMenuButton={mouseOverMenuButton} />
                </div>

            </div>
            
        </header>
    );
}

export default SmHeader;
