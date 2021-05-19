import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
// import components

import routes from './routes';
import PublicRoute from './Public';
import PrivateRoute from './Private';
import ErrorHandler from '../components/util/ErrorHandler/ErrorHandler';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import ScrollToTop from '../components/util/ScrollToTop/ScrollToTop';
import ChangeHeader from '../components/util/ScrollToTop/ChangeHeader';
import TransparentSpinner from '../components/common/Spinner/TransparentSpinner';

const Routes = React.memo((props) => {
    const [loading, setLoading] = useState(true);



    const renderRoutes = useMemo(
        () =>
            routes.map((route, i) => {
                if (route.auth) {
                    return <PrivateRoute key={i} {...route} />;
                }
                return <PublicRoute key={i} {...route} />;
            }),
        []
    );

    return (
        <Router>
            <Suspense 
                fallback={<TransparentSpinner />}
            >
                <ToastContainer />
                <ScrollToTop />
                <ChangeHeader/>
                <ErrorHandler>
                <Header />
                <Switch>{renderRoutes}</Switch>
                <Footer />
                </ErrorHandler>
            </Suspense>
        </Router>
    );
});

const mapStateToProps = (state) => {
    const { userDomain, application } = state.web;
    return {
        userDomain,
        application,
    };
};

export default connect(mapStateToProps)(Routes);
