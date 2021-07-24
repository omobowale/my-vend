import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PageSeo from './components/PageSeo';
import Breadcrumb from './components/BreadCrumb';
import {getProductDetails, getProducts, getProductSearch } from '../../service'
import './index.scss'
import { Link, withRouter } from 'react-router-dom';
import SubscriptionSection from '../../../../components/layout/SubscriptionSection';
import { getCompareScreenSize } from '../../../../utils/setScreenSIze';
import _ from 'lodash';
import { setComparableReq, handleCompare } from './service';
import { compare } from '../../../../utils/compare';
import CompareHeader from './components/CompareHeader';
import CompareBody from './components/CompareBody';
import Search from './components/Search';


function Page({ dispatch, categories, comparable, compareBody, compareHeader }) {
    const [screenSize, setScreen] = useState('');
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [products, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('rank');
    // const [query, setQuery] = useState('');
    const [subCats, setCategories] = useState([]); 
    const [activeCat, setActiveCategory] = useState(''); 

    useEffect(() => {

        //Remove the compare notifier at the top bar
        if (comparable) {
          dispatch(setComparableReq(false));
        }
        dispatch(handleCompare());
    
        return () => {
            dispatch(setComparableReq(compare.get().length > 0));
        }
    }, []);

    useEffect(() => {

        //Remove the compare notifier at the top bar
        const cats = compare.getCat();
        const catObj = cats.map(slug => {
            return categories.find(cat => cat.slug === slug)
        });
        setCategories(catObj);
        setActiveCategory(cats.length > 0 && cats[0])
    }, [categories]);


    useEffect(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);

        return () => {
        window.removeEventListener('resize', updateScreenWidth);
        };
    });

    const updateScreenWidth = () => {
        const newScreenSize = getCompareScreenSize();
        compare.setLimit();

        if (newScreenSize !== screenSize) {
            setScreen(newScreenSize);
        }
    };

    const changeTab = (e, tab='') => {
        e.preventDefault();
        setActiveCategory(tab);
        setProductList([]);
    }

    const removeItem = (cat) => {
        console.log(cat)
        compare.removeItem(cat.subcategory.slug, cat.slug);
        dispatch(handleCompare());
    } 

    const clearCompare = () => {
        compare.clearAll();
        dispatch(handleCompare());
        
        window.location = `/`;
    } 

    const searchByName = useCallback((query) => {
        if(!query){
            return 
        }
        setLoading(true);
        dispatch(getProductSearch({query})).then(data => {
            setProductList(_.isArray(data) ? data.map(item => { 
                const subCategory = _.isString(item.subcategory) ? categories.find(cat => cat.id === item.subcategory) || {} : item.subcategory || {};
                return {...item, subCategory}
            }).filter(item => item.subCategory.slug === activeCat) : []);
            
        }).catch(err => err);

    });
    
    const saveForCompare = useCallback((e, data) => {
        e.preventDefault();
    
        const save = compare.save(data.subCategory.slug, data.slug);

        setTimeout(() => dispatch(handleCompare()), 100);
        // dispatch(handleCompare());

    });

    return (
        <>
        
            <PageSeo />
            <main className="page">
                <div className="container detail-container sm-container page-content">
                    <Breadcrumb />
                    <section className="mt-2 mb-5">
                        <div className="section--title">Compare Products</div>
                    </section>

                    <div className="product-detail-nav">
                        <nav className="navigation">
                            <ul>
                                {subCats.map(item => {
                                    if(!item) return;
                                    return (

                                    <li key={item.slug} className="m-t-three">
                                        <Link
                                            className={ item.slug === activeCat && "active"}
                                            onClick={(e) => changeTab(e, item?.slug) }
                                            to=""
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )})}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="page-compare-section ">
                    <div className="container detail-container sm-container">
                        <div className="compare-container row">
                            <div className="compare-container-products col-md-10 col-sm-12 ">
                                <CompareHeader
                                    compareHeader={compareHeader}
                                    limit={compare.limit}
                                    activeTab={activeCat}
                                    removeItem={removeItem}
                                />
                                {/* <hr className="m-0" /> */}
                                <CompareBody
                                    compareBody={compareBody}
                                    limit={compare.limit}
                                    activeTab={activeCat}
                                />
                            </div>
                            <div className="compare-container-search col-md-2 col-sm-12">
                                <Search handleSearch={searchByName} saveForCompare={saveForCompare} products={products} />
                            </div>
                        </div>
                        <div className="delete-compare">
                            <button
                                type="button"
                                onClick={clearCompare}
                                className="butn butn--red--outline"
                            >
                                Clear All
                            </button>
                        </div>
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
        categories: state.web.categoryList || [],
        comparable: state.web.comparable,
        compareHeader: state.web.compareHeader,
        compareBody: state.web.compareBody,
    };
};

export default withRouter(connect(mapStateToProps)(Page));
