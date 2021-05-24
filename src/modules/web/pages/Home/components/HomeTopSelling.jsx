import { Link } from 'react-router-dom';
import moment from 'moment';
import shortid from 'shortid';
import img3 from '../../../../../assets/img/logo/image 3.png'

import './MiniProfile.scss';
import ProductMiniProfile from './ProductMiniProfile';
import DealCountDown from './DealCountDown';

const HomeTopSelling = ({products=[]}) => {
    return (
        <>
            <section className="home_featured_nav">
                <div className="section--title">Top Selling Products</div>
            </section>
            <section className="home_top_seller">
                <div className="home_top_seller-content">
                    <div className="col">
                        <div className="stack-items">
                            
                            {products.map( (product) => (
                                <ProductMiniProfile key={shortid.generate()} product={product} />
                            ))}
                            
                            <div className="stack-item">
                                <div className="stack-content">
                                    <img src={img3} />
                                    <div className="stack-content-text">
                                        <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                        <div className="stack-content-bottom">
                                            <div className="pricing">
                                                <p className="starting_from_caption">from</p>
                                                <p className="starting_from_main">
                                                2,000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="stack-item">
                                <div className="stack-content">
                                    <img src={img3} />
                                    <div className="stack-content-text">
                                        <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                        <div className="stack-content-bottom">
                                            <div className="pricing">
                                                <p className="starting_from_caption">from</p>
                                                <p className="starting_from_main">
                                                2,000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stack-items">
                            
                            {products.map( (product) => (
                                <ProductMiniProfile product={product} />
                            ))}

                            <div className="stack-item">
                                <div className="stack-content">
                                    <img src={img3} />
                                    <div className="stack-content-text">
                                        <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                        <div className="stack-content-bottom">
                                            <div className="pricing">
                                                <p className="starting_from_caption">from</p>
                                                <p className="starting_from_main">
                                                2,000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="stack-item">
                                <div className="stack-content">
                                    <img src={img3} />
                                    <div className="stack-content-text">
                                        <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                        <div className="stack-content-bottom">
                                            <div className="pricing">
                                                <p className="starting_from_caption">from</p>
                                                <p className="starting_from_main">
                                                2,000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    
                    </div>
                    <div className="deal-of-week">
                        <div className="deal-of-week-content">
                            <div className="section--title"><span>Deal</span> Of The Week</div>
                            <div className="stack-content">
                                <div className="stack-content-text">
                                    <h4 className="work"> Ceramic Wall Tiles 200mm X 300mm </h4>
                                    <div className="stack-content-bottom">
                                        <div className="pricing">
                                            <p className="starting_from_main">
                                            2,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <img src={img3} />
                            </div>
                            
                            <div
                                className="deal-timer "
                                >
                                <DealCountDown
                                    endDate={moment().add('20 days')}
                                />
                            </div>
                            


                        </div>
                        <div className="deal-of-week-summary">
                            <div className="col-6">Available <span>30</span></div>
                            <div className="col-6">Already Sold <span>57</span></div>
                        </div>
                    </div> 
                </div>    
            </section>
        </>
    )

}

export default HomeTopSelling;