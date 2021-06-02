import { Link } from 'react-router-dom';
import moment from 'moment';
import img3 from '../../../../../assets/img/logo/image 3.png'
import sug from '../../../../../assets/img/common/Suggested.png'

import './MiniProfile.scss';
import ProductMiniProfile from './ProductMiniProfile';
import DealCountDown from './DealCountDown';
import { renderRating } from '../../../../../utils/rating';

const HomeTopSelling = ({products=[]}) => {
    return (
        <>
            <section className="home_top_suggested">
                <div className="home_top_suggested-content">
                    <div className="suggestion-container">
                        <img src={sug} />
                    </div> 
                        <div className="stack-items">
                            
                            {products.map( (product) => (
                                <ProductMiniProfile showRating={true} product={product} />
                            ))}
                            
                            <div className="stack-item">
                                <div className="stack-content">
                                    <div className="rating-review">
                                        <div className="rating">
                                            {renderRating(4, false)}
                                        </div>
                                    </div>
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
                                    <div className="rating-review">
                                        <div className="rating">
                                            {renderRating(4, false)}
                                        </div>
                                    </div>
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
            </section>
        </>
    )

}

export default HomeTopSelling;