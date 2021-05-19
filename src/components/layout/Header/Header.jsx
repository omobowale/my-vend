import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import LgHeader from './lgheader';
import SmHeader from './smheader';
import { getScreenSize } from '../../../utils/setScreenSIze';
import { useHistory, useLocation } from 'react-router-dom';
import Auth from '../../../modules/web/pages/Auth';
import * as actions from '../../../modules/web/store/actions'

function Header({
    dispatch,
    buyer,
    seller,
    pendingOrders,
    application,
    authenticated,
    authPage,
    showAuth,
    notifications,
}) {
    const [screenSize, setScreen] = useState('');
    const location = useLocation();
    const history = useHistory();

    const goToSignup = () => {
        // dispatch(setSignupUrl(location.pathname || '/'));

        history.push('/signup');
    };

    useEffect(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);

        return () => {
        window.removeEventListener('resize', updateScreenWidth);
        };
    });

    const updateScreenWidth = () => {
        const newScreenSize = getScreenSize();
        if (newScreenSize !== screenSize) {
        setScreen(newScreenSize);
        }
    };

    const closeAuthPage = () => {
        dispatch(actions.setAuthPage({showAuth: false, authPage: 'login'}));
    }
    
    const openAuthPage = (authPage='login') => {
        dispatch(actions.setAuthPage({showAuth: true, authPage}));
    }

    const displayHeader = () => {

        return screenSize === 'large' ? (
            <LgHeader
            buyer={buyer}
            seller={seller}
            openAuthPage={openAuthPage}
            pendingOrders={pendingOrders}
            application={application}
            authenticated={authenticated}
            dispatch={dispatch}
            notifications={notifications}
            signup={goToSignup}
            />
        ) : (
            <SmHeader
            openAuthPage={openAuthPage}
            application={application}
            authenticated={authenticated}
            notifications={notifications}
            dispatch={dispatch}
            signup={goToSignup}
            />
        );
    }

    return (
        <>
            {displayHeader()}
            {!authenticated && <Auth show={showAuth} openAuthPage={openAuthPage} authPage={authPage} onHide={closeAuthPage} />}
        </>
        )
}

const mapStateToProps = (state) => {
    return {
        showAuth: state.web.showAuth,
        authPage: state.web.authPage,
        authenticated: state.web.isAuthenticated,
    };
};

export default connect(mapStateToProps)(Header);
