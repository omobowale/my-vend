import React, { useState, useEffect } from 'react';

import LgHeader from './lgheader';
import SmHeader from './smheader';
import { getScreenSize } from '../../../utils/setScreenSIze';
import { useHistory, useLocation } from 'react-router-dom';

function Header(props) {
    const [screenSize, setScreen] = useState('');
    const location = useLocation();
    const history = useHistory();

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

    const displayHeader = () => {

        return screenSize === 'large' ? (
            <LgHeader
                aboutRef={props.aboutRef}
                serviceRef={props.serviceRef}
                contactRef={props.contactRef}
                productRef={props.productRef}
            />
        ) : (
            <SmHeader
                aboutRef={props.aboutRef}
                serviceRef={props.serviceRef}
                contactRef={props.contactRef}
                productRef={props.productRef}
            />
        );
    }

    return (
        <>
            {displayHeader()}
        </>
        )
}

export default Header;
