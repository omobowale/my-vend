import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSeo from './components/PageSeo';
import HomeHeader from './components/HomeHeader';
import HomeHeroBelt from './components/HomeHeroBelt';
import HomeFeatured from './components/HomeFeatured';
import HomeBanner from './components/HomeBanner';
import HomeMiddleBelt from './components/HomeMiddleBelt';
import HomeSuggestion from './components/HomeSuggestion';

import {getFeaturedProducts, getProducts} from '../../service'
import HomeTopSelling from './components/HomeTopSelling';
import './home.scss'

function Home({ dispatch, featuredProducts, products }) {
    console.log('fed', products)
    useEffect(() => {
        
        dispatch(getFeaturedProducts({})).catch(err => err);
        dispatch(getProducts({})).catch(err => err);
    
    }, [
        dispatch,
    ]);

    return (
        <>
        
            <PageSeo />
            <main className="page home">
                <HomeHeader />
                <div className="container home_content">
                    <HomeHeroBelt />
                    <HomeFeatured products={featuredProducts} />
                    <HomeMiddleBelt />
                    <HomeBanner />
                    <HomeTopSelling products={products} />
                    <div className="bg-theme-secondary p-3 text-center row m-0">
                        <h3 className="col-md-3 h4 mt-3 text-w-800">We are LiveVend</h3>
                        <p className="col-md-6 mt-3 p-2">We have been transforming ideas and visions into award winning projects</p>
                        <div className="col-md-3 text-center px-3">
                            <button className="butn px-4 py-2 mt-2 bg-theme-gray text-w-700">Request a Quantity Survey</button>
                        </div>
                    </div>
                    <HomeSuggestion products={products} />
                    <HomeBanner />
                    <div className="bg-theme-dark p-3 text-center">
                        Brands and product manafacturer that have been trusted over time
                    </div>
                    <div>
                        Vendorsß
                    </div>
                    <div > mobile download</div>
                    <div  className="bg-theme-secondary p-3"> Subscribe to our newsletter</div>
                </div>
            </main>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        featuredProducts: state.web.featuredProducts,
        products: state.web.products,
    };
};

export default connect(mapStateToProps)(Home);
