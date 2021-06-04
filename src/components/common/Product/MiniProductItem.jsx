import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';

import Price from '../Price/Price';

const MiniProductItem = ({product={},  className=''}) => {
      
    return (

        <div className={`stack-item mini ${className}`}>
            <Link className="stack-content">
                <div className="save-button" >
                    <FontAwesomeIcon icon={hollowHeart} className="save" />
                </div>
                <div className="stack-content-img">
                    <img className="img-fluid" src={product.image && product.image[0]} />
                </div>
                <div className="stack-content-text">
                    {product.tag && product.tag.length > 0 && (
                        <div className="stack-content-tag" >{product.tag[0]}</div>
                    )}

                    <h4 className="work"> {product.name} </h4>

                    <div className="stack-content-bottom">                        
                        <div className="pricing">
                            <p className="starting_from_main">
                                <Price  
                                    currency={product.currency} 
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

export default MiniProductItem;