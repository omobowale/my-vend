import { useCallback, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PageSeo from './components/PageSeo';

import './index.scss'
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Header from '../../../../components/layout/HeaderCutstruct/Header';
import Footer from '../../../../components/layout/FooterCutstruct/Footer';
import banner from '../../../../assets/img/common/Cutstruct-Banner.png'
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import Products from './components/Products';
import TopHeader from './components/TopHeader';

function Home() {
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const productRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Header aboutRef={aboutRef} serviceRef={serviceRef} productRef={productRef} contactRef={contactRef} />
            <PageSeo />
            <main className="page cutstruct-page">
                <div className="home-banner-container">
                    <img className="full-screen" src={banner} />
                    <TopHeader />
                </div>
                <AboutUs  ref={aboutRef}/>
                <Service ref={serviceRef} />
                <Products ref={productRef} />
            </main>
            <Footer ref={contactRef} />
            {/* <div className="page-container">
                <div className="nav-border" />
            </div> */}
        </>
    );
}



export default Home;
