import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes, faTimesCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// import PriceInput from '../../../../../components/common/PriceInput/PriceInput';

function Filter({ filter, brands = [{name: 'Local', slug: 'local'}, {name: 'Presto', slug: 'presto'}, {name: 'TopSteel', slug: 'topsteel'}], onPage }) {
    const [sidebar, setSidebar] = useState('');
    const [min_price, setMinPrice] = useState();
    const [max_price, setMaxPrice] = useState();
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
                        <nav className="navigation ">
                            <ul>
                                <li > 
                                        <span className>Price</span>  <span className="chevron right"></span>
                                    
                                </li>
                            </ul>
                        </nav>
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
