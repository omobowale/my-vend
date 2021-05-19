import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSeo from './components/PageSeo'
import HomeHeader from './components/HomeHeader'
import HomeHeroBelt from './components/HomeHeroBelt'
import HomeFeatured from './components/HomeFeatured'
import HomeBanner from './components/HomeBanner';
import HomeMiddleBelt from './components/HomeMiddleBelt';

import {getFeaturedProducts} from '../../service'
import HomeTopSelling from './components/HomeTopSelling';

function Home({ dispatch, featuredProducts }) {
    console.log('fed', featuredProducts)
    useEffect(() => {
        
          dispatch(getFeaturedProducts({}));
    
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
                    <HomeFeatured products={[]} />
                    <HomeMiddleBelt />
                    <HomeBanner />
                    <HomeTopSelling products={[]} />
                </div>
            </main>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        featuredProducts: state.web.featuredProducts
    };
};

export default connect(mapStateToProps)(Home);
