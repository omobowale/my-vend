import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes, faTimesCircle, faEllipsisV, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MultiRangeSlider from '../../../../../components/common/InputField/MultipleRangeSlider';

// import PriceInput from '../../../../../components/common/PriceInput/PriceInput';

function Filter({ filter, brands = [{name: 'Local', slug: 'local'}, {name: 'Presto', slug: 'presto'}, {name: 'TopSteel', slug: 'topsteel'}], onPage }) {
    const [filterMenu, setFilterMenu] = useState('');
    const [sidebar, setSidebar] = useState('');
 
    const [min_price, setMinPrice] = useState(0);
    const [max_price, setMaxPrice] = useState(900000);
    const [type, setType] = useState('');
    const [brand, setBand] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => setShowFilter(!showFilter);

    const onSubmit = (e) => {
        e.preventDefault();

        const params = {
        ...(!!type && { project_type: type }),
        ...(!!min_price && { min_budget: min_price }),
        ...(!!max_price && { max_budget: max_price }),
        ...(!!brand && { brand_id: brand }),
        };

        setShowFilter(false);
        filter(params);
    };


    const clearFilters = () => {
        setMinPrice('');
        setMaxPrice('');
        setType('');
        setBand('');
    };

    const showSidebar = () => setSidebar('show');

    const hideSidebar = () => setSidebar('');

    const renderFilterMenu = () => {
        switch (filterMenu) {
            case 'price': 
                return (
                    <div className="sub-navigation">
                        <div onClick={() => setFilterMenu('')}  className="prev-menu">
                            <span> 
                                <FontAwesomeIcon
                                icon={faAngleLeft}
                                />
                            </span>
                            <span>Back </span>
                        </div>
                        <div className="filter-form">
                            <div className="form-title">Price</div>
                            <MultiRangeSlider min={0} max={1000000} name="price" onChange={(name, min, max) => {setMinPrice(min); setMaxPrice(max)}} minVal={min_price} maxVal={max_price} />
                        </div>
                    </div>
                )

            case 'brand': 
                return (
                    <div className="sub-navigation">
                        <div onClick={() => setFilterMenu('')}  className="prev-menu">
                            <span> 
                                <FontAwesomeIcon
                                icon={faAngleLeft}
                                />
                            </span>
                            <span>Back </span>
                        </div>
                        <div className="filter-form">
                                <div className="form-title">Brand</div>
                                {brands.map((option, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="custom-control custom-checkbox mt-3"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`brand${option.slug}`}
                                                    name={'brand'}
                                                    value={option.slug}
                                                    // defaultChecked={value == option ? true : false}
                                                    // onClick={e =>
                                                    //     onChange(e.target.name, e.target.value)
                                                    // }
                                                    className="custom-control-input"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor={`brand${option.slug}`}
                                                >
                                                    {option.name}
                                                </label>
                                            </div>
                                        );
                                    })}
                        </div>
                    </div>
                )

            default: 
                return ( 
                    <>
                        <nav className="navigation ">
                            <ul>
                                <li onClick={() => setFilterMenu('price')} > <span className>Price</span>  <span className="chevron right nav-icon-chevron"></span></li>
                                <li onClick={() => setFilterMenu('brand')} > <span className>Brand</span>  <span className="chevron right nav-icon-chevron"></span></li>
                                {/* <li > <span className>Inventory Status</span>  <span className="chevron right nav-icon-chevron"></span></li>
                                <li > <span className>Rating</span>  <span className="chevron right nav-icon-chevron"></span></li>
                                <li > <span className>Sales</span>  <span className="chevron right nav-icon-chevron"></span></li>
                                <li > <span className>Retailer</span>  <span className="chevron right nav-icon-chevron"></span></li> */}
                            </ul>
                        </nav>
                        <div className="pt-5 pl-3">
                            <Link className="nav-cutstruct" to="/cutstruct">www.livevend.com/cutstruct/</Link>
                        </div>
                    </>
                )
        }
    } 

    return (
        <>
            <div className="text-theme-primary bold mobile-filter" >
                <button className="btn btn-filter text-theme-primary" onClick={showSidebar} > Filter </button>
            </div>
    
            <div className={`sidebar product-list-body-filter-absolute ${sidebar}`}>
                <div className="side-content">
                    <div className="close-sidebar" onClick={hideSidebar}>
                        <span>close </span>
                        <span> 
                            <FontAwesomeIcon
                            icon={faTimesCircle}
                            />
                        </span>
                    </div>
                    
                    <div className="sidebar-header">
                        <h3 className="h3">Filter</h3>
                    </div>

                    <div className="filter-settings-content">
                        {renderFilterMenu()}
                    </div>

                </div>
            </div>
        </>
    );
}

Filter.propTypes = {
    filter: PropTypes.func.isRequired,
    brands: PropTypes.array.isRequired,
    inventoryStatuses: PropTypes.array.isRequired,
};

export default Filter;
