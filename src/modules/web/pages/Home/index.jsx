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
import dangote from '../../../../assets/img/common/dangote.png'
import bua from '../../../../assets/img/common/bua.png'
import appstore from '../../../../assets/img/common/app-store.png'
import googlestore from '../../../../assets/img/common/google-store.png'
import livevend from '../../../../assets/img/common/live-vend-app.png'
import livevendproject from '../../../../assets/img/common/live-vend-project-app.png'
import { Link } from 'react-router-dom';

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
                </div>
                <div className="container vendor-section">
                    <div className="col">
                        <div className="vendor-items">
                            
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={dangote} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={bua} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={dangote} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={bua} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={dangote} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={bua} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={dangote} />
                                </div>
                            </div>

                        </div>
                        
                        <div className="vendor-items">
                            
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={bua} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={dangote} />
                                </div>
                            </div>

                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={bua} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={dangote} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={bua} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={dangote} />
                                </div>
                            </div>
                            <div className="vendor-item">
                                <div className="vendor-content">
                                    <img src={bua} />
                                </div>
                            </div>


                        </div>
                    
                    </div>

                </div>
                <div className="livevend-app-section">
                    <div className="clear-shift"></div>
                    <div className="livevend-app-section-content">
                    <div className="container">
                        <div className="img-background">
                            <img
                                src={livevend}
                                alt="a freelancer"
                                className="livevend-app"
                            />
                            <img
                                src={livevendproject}
                                alt="a freelancer"
                                className="livevend-project-app"
                            />
                        </div>
                        <div className="right-container">
                            
                                <div className="app-section--text">
                                    <h1 className="app-section--text-main ">
                                        <span>Download</span> Livevend App <span>Now!</span>
                                    </h1>
                                    <h6 className="app-section--text-sub ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies senectus nec porta aliquam. Sed auctor ut ullamcorper massa leo, fermentum. 
                                    </h6>
                                    <div className="app-section--text-stores">
                                        <Link >
                                            <img
                                                src={googlestore}
                                                alt="a freelancer"
                                            />
                                        </Link>
                                        <Link >
                                            <img
                                                src={appstore}
                                                alt="a freelancer"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div  className="bg-theme-secondary p-5 subscription-section">
                    <div className="container">
                        <div className="row m-0">

                            <div className="col-md-4">
                                <h3 className="h5 mt-3 text-w-800">Subscribe To Our Newsletter</h3>
                                <p className="mt-3 p-2">We have been transforming ideas and visions into award winning projects</p>

                            </div>
                            <div className="col-md-5">

                                <p>Yes, I want to receive news and offers related to PriceRunner's product range, competitions and recommendations via email. I can withdraw my consent at any time. Read more in our Privacy Policy.</p>
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                    </div> 
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
