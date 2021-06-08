import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PageSeo from './components/PageSeo';
import Breadcrumb from './components/BreadCrumb';
import {getProductDetails, getProducts } from '../../service'
import './index.scss'
import { Link, withRouter } from 'react-router-dom';
import SubscriptionSection from '../../../../components/layout/SubscriptionSection';
import { getScreenSize } from '../../../../utils/setScreenSIze';
import _ from 'lodash';
import AboutProduct from './components/AboutProduct';
import RelatedProducts from '../../../../components/common/Product/RelatedProducts';

import ad1 from '../../../../assets/img/common/mega-ad1.png';
import ad2 from '../../../../assets/img/common/mega-ad2.png';
import ad3 from '../../../../assets/img/common/mega-ad3.png';

function Page({ dispatch, categories, productName, products }) {
    const [screenSize, setScreen] = useState('');
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [product, setProduct] = useState({name: 'Wheelbarrow'});
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('rank');
  

    useEffect(() => {
        dispatch(getProductDetails({name: productName})).then(data => setProduct(data)).catch(err => err);
    
    }, [
        dispatch,
    ]);


    useEffect(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);

        return () => {
        window.removeEventListener('resize', updateScreenWidth);
        };
    });

    const updateScreenWidth = () => {
        const newScreenSize = getScreenSize();
        if (newScreenSize !== screenSize) {
        setScreen(newScreenSize);
        }
    };

    const onChange = (e) => {
        const { value, name } = e.target;

        switch (name) {
            case 'search':
                // return setText(value);
            case 'sort':
                return handleSort(value);
            default:
                return null;
        }
    };

    const handleSort = (value) => {
        setSort(value);
        let query = {};
    
        switch (value) {
        case 'high':
            query.sort_key = 'local_price';
            query.sort_order = 'desc';
            break;
        case 'low':
            query.sort_key = 'local_price';
            query.sort_order = 'asc';
            break;
        case 'recent':
            query.sort_key = 'post_date';
            query.sort_order = 'desc';
            break;
        default:
            return null;
        }
    
    };

        
    return (
        <>
        
            <PageSeo product={product} />
            <main className="page">
                <div className="container detail-container sm-container page-content">
                    <Breadcrumb category={{}} product={product} />
                    
                    <AboutProduct product={product}/>
                </div>
                <div className="page-desc-section">

                    <div className="tab-section container detail-container sm-container">
                        <div className="tab-content row m-3">
                            
                            <ul className="desc-container">
                                <li className="desc"> <span className="left">Type</span> <span>{product.type}</span> </li>
                                <li className="desc"> <span className="left">Measurement</span> <span>{product.measurement}</span> </li>
                                <li className="desc"> <span className="left">Weight</span> <span>{product.weight}</span> </li>
                                <li className="desc"> <span className="left">Quantity</span> <span>{product.quantity}</span> </li>
                                <li className="desc"> <span className="left">Location</span> <span>{product.location}</span> </li>
                                
                            </ul>
                        </div>
                        <div className="advert-section">
                            <img src={ad1} className="img-fluid adv-img" /> 
                            <img src={ad2} className="img-fluid adv-img" /> 
                            <img src={ad3} className="img-fluid adv-img" /> 
                        </div>
                    </div>

                    <div className="container detail-container sm-container mt-3">
                        <RelatedProducts className="mt-5" products={relatedProducts} />
                    </div>
                </div>
                <SubscriptionSection />
            </main>
        </>
    );
}

const mapStateToProps = (state, router) => {
    const { params } = router.match;
    return {
        productName: params.name,
        categories: state.web.categories, 
    };
};

export default withRouter(connect(mapStateToProps)(Page));
