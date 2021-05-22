import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag} from '@fortawesome/free-solid-svg-icons';
import { faClock, } from '@fortawesome/free-regular-svg-icons';


import './MiniProfile.scss';

const ProductMiniProfile = (product={}, horizontal=false, className='') => {
    return (

        <div className={`stack-item ${horizontal && 'horizontal'} ${className}`}>
            <img src={product.image} />
            <div className="mini-profile-text">
                <h4 className="work"> {product.title} </h4>
                <div className="mini-profile-bottom">
                    <div className="pricing">
                        <p className="starting_from_caption">from</p>
                        <p className="starting_from_main">
                        {product.price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductMiniProfile;