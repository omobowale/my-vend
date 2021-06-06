import { Link } from 'react-router-dom';
import moment from 'moment';
import shortid from 'shortid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';

import Price from '../../../../../components/common/Price/Price';
import { renderRating } from '../../../../../utils/rating';
import { useState } from 'react';

const AboutProduct = ({product={}}) => {
    const [currentImage, setImage] = useState();

    return (
            <section className="product-detail-container">

                <div className="product-detail-content">
                    <div className="product-detail-img-container">
                        <div className="img-list">
                            {product.image && product.image.length > 0 && (
                                product.image.map( image => (<div className="img-item" onClick={() => setImage(image)}><img className="img-fluid" src={image} /> </div> ) )
                            )}
                        </div>
                        <div className="img-content">
                            <div className="img-content-header">

                                {product.tag && product.tag.length > 0 && (
                                    product.tag.map( tag => (<div className="content-tag" >{tag}</div> ) )
                                )}
                                
                                <div className="save-button" >
                                    <FontAwesomeIcon icon={hollowHeart} className="save" />
                                </div>
                            </div>
                            <div className="active-img">
                                <img className="img-fluid" src={currentImage ? currentImage : product.image && product.image[0]} />
                            </div>
                        </div>
                    </div>
                    <div className="product-detail-desc">
                        <h4 className="work"> {product.name} </h4>

                        <div className="rating-review">
                            <div className="rating">
                                {renderRating(4)}
                            </div>
                            <span className="review">4.0 ({2})</span>

                        </div>
                        <div className="desc"> {product.desc} </div>
                    </div>
                    <div className="product-detail-pricing">
                        <div className="title">
                            Compare Prices
                        </div>
                        <div className="compare-price">
                            <div className="pricing">
                                <p className="starting_from_caption">from</p>
                                <p className="starting_from_main">
                                    <Price  
                                        currency={product.currency} 
                                        className=''
                                        noConversion="true"
                                        priceCurrencyId={product.currency && product.currency.id} 
                                        price={product.price}
                                        />
                                </p>
                            </div>
                            <div className="pricing">
                                <p className="starting_from_caption">to</p>
                                <p className="starting_from_main">
                                    <Price  
                                        currency={product.currency} 
                                        className=''
                                        noConversion="true"
                                        priceCurrencyId={product.currency && product.currency.id} 
                                        price={product.price}
                                        />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-detail-nav">
                    <nav className="navigation">
                        <ul>
                            <li className="m-t-three">
                                <Link
                                    className="active"
                                >
                                    Product Information
                                </Link>
                            </li>
                            {/* <li className="m-t-three">
                                <Link
                                    to="#"
                                >
                                    Suppliers
                                </Link>
                            </li>
                            <li className="m-t-three">

                                <Link to="#"
                                    >
                                    Contractors
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>

            </section>
    )

}

export default AboutProduct;