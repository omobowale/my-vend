import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as hollowHeart } from '@fortawesome/free-regular-svg-icons';

import Price from '../../../../../components/common/Price/Price';

const SubCategoryItem = ({cat={}, subCat={}, className=''}) => {
      
    return (

        <div className={`stack-item col-6 col-md-3 ${className}`}>
            <Link className="stack-content" to={`/category/${cat.slug}/${subCat.slug}`} >
                
                <div className="stack-content-img">
                    <img className="img-fluid" src={subCat.image} />
                </div>
                <div className="stack-content-text">
                    
                    <h4 className="work"> {subCat.name} </h4>
                    
                </div>
            </Link>
        </div>
    )

}

export default SubCategoryItem;