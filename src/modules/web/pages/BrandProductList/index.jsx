import { useCallback, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import PageSeo from './components/PageSeo';
import Breadcrumb from './components/BreadCrumb';
import Filter from './components/Filter';
import SmFilter from './components/SmFilter';
import SortTotal from './components/SortTotal';
import {getProducts, getBrandCategoryList } from '../../service'
import './index.scss'
import { Link, withRouter } from 'react-router-dom';
import SubscriptionSection from '../../../../components/layout/SubscriptionSection';
import { getScreenSize } from '../../../../utils/setScreenSIze';
import RelatedProducts from '../../../../components/common/Product/RelatedProducts';
import ProductList from './components/ProductList';
import Transformer from '../../../../utils/Transformer'
import _ from 'lodash';
import SimpleSpinner from '../../../../components/common/Spinner/SimpleSpinner';

function Page({ dispatch, category={}, subCategory={}, brand={}, brandName, defaultCurrency }) {
    const [screenSize, setScreen] = useState('');
    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState({min: 0, max: 10000});
    // const { query } = parseQuery(location.search);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [sort, setSort] = useState('rank');
    const [altText, setAltText] = useState('');
    const [page, setPage] = useState(1);
  

    useEffect(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);

        return () => {
        window.removeEventListener('resize', updateScreenWidth);
        };
    });

    const isFirstRun = useRef(true);
    useEffect (() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            getData();
            return;
        }
        getData();
    }, [brand]);


    const updateScreenWidth = () => {
        const newScreenSize = getScreenSize();
        if (newScreenSize !== screenSize) {
        setScreen(newScreenSize);
        }
    };

    const getData = useCallback(() => {
        setLoading(true);
        dispatch(getBrandCategoryList({brandName})).then(data => {
                setProducts(_.isArray(data) ? data : []); 
                setLoading(false);
                setPriceRange( Transformer.findMinMax(_.isArray(data) ? data : [], 'price'));
            }).catch(err => err);

    })

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
    
    const handleFilter = (params) => {
        // const searchQuery = { ...params, ...(!!text && { query: text }) };
    
    };

    return (
        <>
        
            <PageSeo category={subCategory} />
            <main className="page">
                <div className="container sm-container page-content">
                    <Breadcrumb category={category} subCategory={subCategory} brand={brand} />
                    <section className="mt-2 mb-5">
                        <div className="section--title">{brand.name}</div>
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

                            <div className="filter-content-section">
                                <div className="filter-content-section-tag" > Price: {`${defaultCurrency.symbol}${priceRange.min} - ${defaultCurrency.symbol}${priceRange.max}`} </div>
                                <div className="filter-content-section-tag" > {brand.name} </div>
                            </div>

                            { loading && <SimpleSpinner /> }
                            { !loading && <ProductList products={products}  /> }
                        </div>
                    </div>
                    <RelatedProducts products={relatedProducts}/>
                </div>
                <SubscriptionSection />
            </main>
        </>
    );
}

const mapStateToProps = (state, router) => {
    const { params } = router.match;
    const categories = state.web.categories; 
    return {
        brandName: params.name,
        category: state.web.categories.find(cat => cat.slug === params.categoryName) || {}, 
        subCategory: state.web.categoryList.find(cat => cat.slug === params.subCategoryName) || {}, 
        brand: state.web.categoryList.find(cat => cat.slug === params.name) || {}, 
        defaultCurrency: state.web.currencies.length > 0 ? state.web.currencies.find(cur => cur.short.toLowerCase() == 'ngn') : {},
    };
};

export default withRouter(connect(mapStateToProps)(Page));
