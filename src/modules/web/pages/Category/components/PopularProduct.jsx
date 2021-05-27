import { Link } from 'react-router-dom';
import moment from 'moment';
import img3 from '../../../../../assets/img/common/image3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';


const PopularProducts = ({products=[]}) => {
    return (
        <div className="popular-products">
            <section className="popular-products-title">
                <div className="section--title">Popular Products</div>
            </section>
            <section className="popular-products-content">
                
                <div className="stack-items">
                    <div className="stack-item">
                        <div className="stack-content">
                            <div className="save-button" >
                                <FontAwesomeIcon icon={hollowHeart} className="save" />
                            </div>
                            <div className="stack-content-img">
                                <img src={img3} className="img-fluid" />
                            </div>
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
                        </div>
                    </div>

                    <div className="stack-item">
                        <div className="stack-content">
                            <div className="save-button" >
                                <FontAwesomeIcon icon={hollowHeart} className="save" />
                            </div>
                            <div className="stack-content-img">
                                <img src={img3} className="img-fluid" />
                            </div>
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
                        </div>
                    </div>
                </div>
    
            </section>
        </div>
    )

}

export default PopularProducts;