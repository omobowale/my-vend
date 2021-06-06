import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';

import Price from '../../../../../components/common/Price/Price';
import { renderRating } from '../../../../../utils/rating';
import Transformer from '../../../../../utils/Transformer';

const ProductMiniProfile = ({product={}, showBtn=false, showTag=true, showRating=false, showSaveIcon=false, saved, refreshAfterRemove = false, horizontal=false, className=''}) => {
    const [selected, setSelected] = useState(false);
    const [profileSaved, setSaved] = useState(saved);

    const saveProfile = async (e) => {
        e.preventDefault();
    
        const profileId = product.id;
        // const save = await favorite.save(profileId);
        // setSaved(save);
    };
    
    const removeProfile = async (e) => {
        e.preventDefault();
    
        const profileId = product.id;
        // const result = await favorite.remove(profileId);
        // // setSaved(!result);
        if (refreshAfterRemove) {
            setTimeout(() => window.location.reload(), 800);
        }
    };

      
    return (

        <Link key={product.id} className={`stack-item ${horizontal && 'horizontal'} ${className}`} to={`/product/${product.slug}`}>
            <div className="stack-content">
                {showSaveIcon && (!profileSaved ? (
                    <div className="save-button" onClick={saveProfile}>
                        <FontAwesomeIcon icon={hollowHeart} className="save" />
                    </div>
                ) : (
                    <div className="save-button" onClick={removeProfile}>
                        <FontAwesomeIcon icon={faTrashAlt} className="delete" />
                    </div>
                ))}
                {showRating && 
                    <div className="rating-review">
                        <div className="rating">
                            {renderRating(4, false)}
                        </div>
                    </div>
                }
                <div className="stack-content-img">
                    <img className="img-fluid" src={product.image && product.image[0]} />
                </div>
                <div className="stack-content-text">
                    {product.tag && product.tag.length > 0 && showTag && (
                        <div className="stack-content-tag" >{product.tag[0]}</div>
                    )}
                    <h4 className="work"> {Transformer.trimText(product.name, 50)} </h4>
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
                    {showBtn && 
                        <div className="call-to-action-container">
                            <Link className="btn call-to-action-btn"  to={`/product/${product.slug}`}>View All Brand Prices</Link>
                        </div>
                    }
                </div>
                
            </div>
        </Link>
    )

}

export default ProductMiniProfile;