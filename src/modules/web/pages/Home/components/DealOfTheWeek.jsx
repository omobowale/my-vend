import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Price from '../../../../../components/common/Price/Price';
import DealCountDown from './DealCountDown';

const DealOfTheWeek = ({product={}, className=''}) => {
    

    return (

        <Link className={`deal-of-week ${className}`}>
            
            <div className="deal-of-week-content">
                <div className="section--title"><span>Deal</span> Of The Week</div>
                <div className="stack-content">
                    <div className="stack-content-text">
                        <h4 className="work"> { product.name || 'No special deal' }</h4>
                        <div className="stack-content-bottom">
                            <div className="pricing">
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
                    <div className="stack-content-img">
                        <img className="img-fluid" src={product.image && product.image[0]} />
                    </div>
                </div>
                
                <div className="deal-timer " >
                    <DealCountDown
                        readCountDown={product.endDate ? true : false}
                        endDate={moment(product.endDate) }
                    />
                </div>
                
            </div>
            <div className="deal-of-week-summary">
                <div className="col-6">Available <span>{product.available || 0}</span></div>
                <div className="col-6">Already Sold <span>{product.sold || 0}</span></div>
            </div>
        </Link>
    )

}

export default DealOfTheWeek;