import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSeo from './components/PageSeo';
import Breadcrumb from './components/BreadCrumb';
import {getProductCategoryList, } from '../../service'
import './index.scss'
import { Link, withRouter } from 'react-router-dom';
import SubCategoryList from './components/SubCategoryList';
import LiveVendApp from './components/LiveVendApp';
import PopularProducts from './components/PopularProduct';
import SubscriptionSection from '../../../../components/layout/SubscriptionSection';

function Page({ dispatch, category={} }) {
    
    useEffect(() => {
        
        dispatch(getProductCategoryList({})).catch(err => err);
    
    }, [
        dispatch,
    ]);

    return (
        <>
        
            <PageSeo category={category} />
            <main className="page">
                <div className="container page-content">
                    <Breadcrumb category={category} />
                    <SubCategoryList category={category} />
                    <PopularProducts />
                </div>
                <LiveVendApp />
                <SubscriptionSection />
            </main>
        </>
    );
}

const mapStateToProps = (state, router) => {
    const { params } = router.match;
    const category = state.web.categories.find(cat => cat.slug === params.name) || {}
    console.log(category) ;
    return {
        category
    };
};

export default withRouter(connect(mapStateToProps)(Page));
