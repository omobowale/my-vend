import React from 'react';
import { compare } from '../../../../../utils/compare';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import Price from '../../../../../components/common/Price/Price';
import { useHistory } from 'react-router-dom';
import { renderRating } from '../../../../../utils/rating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';
import { useCallback } from 'react';

function CompareHeaderItem({data, removeItem}) {
    const history = useHistory();
    const remove = useCallback(() => {
        // e.preventDefault();
        removeItem(data);
    })

    return (
        <div className="col-md-3 col-sm-4 col-6 compare-header">
            
            <div key={data.slug} className={`stack-item compare`}>
                <div className="stack-content" to={`/product/${data.slug}`} >
                    <div className="stack-content-header">
                        <div className="btn-group menu-button">
                            <button
                                type="button"
                                className="btn btn-sm "
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                    <FontAwesomeIcon
                                    icon={faEllipsisV}
                                    size="lg"
                                    className="hamburger-sm"
                                    />

                            </button>

                            <div className="dropdown-menu top-nav-menu">
                                <li className="dropdown-item">
                                    <div onClick={remove}
                                    >
                                        <span> Remove </span>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <Link to={`/product/${data.slug}`} > <span> View Product </span></Link>
                                </li>

                            </div>
                        </div>
                    </div>
                    <div className="stack-content-img">
                        <img className="img-fluid" src={data.image} alt={data.name} />
                    </div>
                    <div className="stack-content-text">
                        
                        <h4 className="work"> {data.name} </h4>

                        <div className="rating-review">
                            <div className="rating">
                                {renderRating(data.rating)}
                            </div>
                            <span className="review">{data.rating} ({data.reviews})</span>
                        </div>
                        <div className="stack-content-bottom">                        
                            <div className="pricing">
                                <p className="starting_from_caption">from</p>
                                <p className="starting_from_main">
                                    <Price  
                                        currency={data.currency} 
                                        className=''
                                        noConversion="true"
                                        priceCurrencyId={data.currencyId} 
                                        price={data.price}
                                        />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            
        </div>
    );
}

function CompareHeader({compareHeader, activeTab, removeItem, limit}) {
    return (
        <div className="container container-sm">
            <div className="row info">
                <div className="col-md-2 col-2 bold"></div>
                <div className="col-md-10 col-10 compare-header-container">
                    <div className="row m-0">
                    {compareHeader.filter(item => item.subcategory.slug === activeTab).slice(0, limit).map((item, index) => {
                        if (index < compare.limit) {
                            return (
                                <CompareHeaderItem
                                    data={item}
                                    key={shortid.generate()}
                                    removeItem={removeItem}
                                />
                            );
                        }
                        return null;
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompareHeader;
