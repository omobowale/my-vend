import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';

import Price from '../../../../../components/common/Price/Price';
import { renderRating } from '../../../../../utils/rating';

const ProductItem = ({product={},  className=''}) => {
      
    return (

        <div key={product.id} className={`stack-item result col-6 col-md-3 ${className}`}>
            <Link className="stack-content">
                <div className="stack-content-header">
                    {product.tag && product.tag.length > 0 && (
                        <div className="stack-content-tag" >{product.tag[0]}</div>
                    )}
                    <div className="save-button" >
                        <FontAwesomeIcon icon={hollowHeart} className="save" />
                    </div>
                </div>
                <div className="stack-content-img">
                    <img className="img-fluid" src={product.image && product.image[0]} />
                </div>
                <div className="stack-content-text">
                    
                    <h4 className="work"> {product.name} </h4>

                    <div className="rating-review">
                        <div className="rating">
                            {renderRating(4)}
                        </div>
                        <span className="review">4.0</span>
                    </div>
                    <div className="stack-content-bottom">                        
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
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default ProductItem;