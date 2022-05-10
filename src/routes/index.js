import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
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
import TopInfo from '../components/common/TopInfo/TopInfo';
import AppLoader from '../components/common/AppLoader/AppLoader';

import { getCurrencyList } from '../modules/web/service';
import { setComparableReq } from '../modules/web/pages/Compare/service';

import { compare } from '../utils/compare';

const Routes = React.memo((props) => {
    const [loading, setLoading] = useState(true);
    const { comparable } = props;


    useEffect(() => {
        (async function () {
            try{
                const { dispatch } = props;
                dispatch(setComparableReq(compare.get().length > 0));

                await dispatch(getCurrencyList());
                setLoading(false);

            }catch(e){

            }
        })();
      }, []);


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
                {/* <TopInfo active={comparable}>
                    <span>You have selected to compare products</span>{' '}
                    <Link className="butn butn--green" to="/compare/product">
                    Compare Now
                    </Link>
                </TopInfo> */}
                <ScrollToTop />
                <ChangeHeader/>
                <ErrorHandler>
                    {/* <Header /> */}
                    <Switch>{renderRoutes}</Switch>
                    {/* <Footer /> */}
                </ErrorHandler>
            </Suspense>
        </Router>
    );
});

const mapStateToProps = (state) => {
    const { userDomain, application, comparable } = state.web;
    return {
        userDomain,
        comparable,
        application,
    };
};

export default connect(mapStateToProps)(Routes);
