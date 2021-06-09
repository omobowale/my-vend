import { useCallback, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PageSeo from './components/PageSeo';
import Breadcrumb from './components/BreadCrumb';
import Filter from './components/Filter';
import SmFilter from './components/SmFilter';
import SortTotal from './components/SortTotal';
import {getProductSearch } from '../../service'
import './index.scss'
import { Link, withRouter } from 'react-router-dom';
import SubscriptionSection from '../../../../components/layout/SubscriptionSection';
import { getScreenSize } from '../../../../utils/setScreenSIze';
import RelatedProducts from '../../../../components/common/Product/RelatedProducts';
import ProductList from './components/ProductList';
import Transformer from '../../../../utils/Transformer'
import SimpleSpinner from '../../../../components/common/Spinner/SimpleSpinner';
import _ from 'lodash';

function Page({ dispatch, location, category, subCategoryName }) {
    const [screenSize, setScreen] = useState('');
    const [products, setProductList] = useState([]);
    const [priceRange, setPriceRange] = useState({min: 0, max: 10000});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { query } = queryString.parse(location.search);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('rank');
    const [altText, setAltText] = useState('');
    const [page, setPage] = useState(1);
  

    const isFirstRun = useRef(true);
    useEffect (() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            getData();
            return;
        }
        getData();
    }, [query]);

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

    const getData = useCallback(() => {
        setLoading(true);
        dispatch(getProductSearch({query})).then(data => {
            setProductList(_.isArray(data) ? data : []);
            setPriceRange( Transformer.findMinMax(_.isArray(data) ? data : [], 'price'));
            setLoading(false);
        }).catch(err => err);

    })

    const handleFilter = (params) => {
        // const searchQuery = { ...params, ...(!!text && { query: text }) };
    
        
    };
        
    return (
        <>
        
            <PageSeo category={query} />
            <main className="page">
                <div className="container sm-container page-content">
                    <Breadcrumb query={query} />
                    <section className="mt-2 mb-5">
                        <div className="section--title">{query}</div>
                    </section>
                    <div className="product-list-body">
                        {screenSize === 'large' ? (
                            <Filter min={priceRange.min} max={priceRange.max}
                            />
                        ) : (
                            <SmFilter min={priceRange.min} max={priceRange.max}
                            />
                        )}
                        <div className="product-list-body-main clearfix">
                            <SortTotal
                                total={products.length}
                                handleSort={onChange}
                                sort={sort}
                            />

                            { loading && <SimpleSpinner /> }
                            { !loading && <ProductList products={products}  /> }
                        </div>
                    </div>
                    <RelatedProducts products={relatedProducts} />
                </div>
                <SubscriptionSection />
            </main>
        </>
    );
}

const mapStateToProps = (state, router) => {
    const { params } = router.match;
    return {
        location: router.location,
        subCategoryName: params.name,
        category: state.web.categories.find(cat => cat.slug === params.categoryName) || {}, 
    };
};

export default withRouter(connect(mapStateToProps)(Page));
