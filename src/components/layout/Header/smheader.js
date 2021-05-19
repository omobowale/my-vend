import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar/sidebar';
import MobileSearchForm from './Forms/MobileSearchForm';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo/logo.png'

function SmHeader({
    signup,
}) {
    const [sidebar, setSidebar] = useState('');
    const [searchMode, setSearchMode] = useState('');

    const showSidebar = () => setSidebar('show');

    const hideSidebar = () => setSidebar('');

    const renderSidebar = () => {
        return (
            <Sidebar closeSidebar={hideSidebar} signup={signup} />
        );
    };

    const toggleSearchMode = () =>
        setSearchMode(searchMode === 'reveal' ? '' : 'reveal');

    return (
        <header className={`header ${searchMode}`}>
            <div className="container">
                <div className="header-flex">
                    <a title="nav" href="#0" className="nav-sm">
                        <FontAwesomeIcon
                        icon={faBars}
                        size="lg"
                        onClick={showSidebar}
                        className="hamburger-sm"
                        />
                    </a>
                    <Link to={'/'} className="logo-sm">
                        <img
                        src={logo}
                        alt="logo"
                        />
                    </Link>
                    <a href="#0" className="mobile-search">
                        <FontAwesomeIcon
                        icon={faSearch}
                        size="lg"
                        className="search"
                        onClick={toggleSearchMode}
                        />
                        <FontAwesomeIcon
                        icon={faTimes}
                        size="lg"
                        className="times"
                        onClick={toggleSearchMode}
                        />
                    </a>
                </div>
                <div className={`container search-field-holder ${searchMode}`}>
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
        </header>
    );
}

export default SmHeader;
