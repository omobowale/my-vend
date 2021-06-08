import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MultiRangeSlider from '../../../../../components/common/InputField/MultipleRangeSlider';
// import PriceInput from '../../../../../components/common/PriceInput/PriceInput';

function Filter({ filter,min=0, max=0, onPage }) {
    const [min_price, setMinPrice] = useState(min);
    const [max_price, setMaxPrice] = useState(max);
    const [type, setType] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => setShowFilter(!showFilter);

    const onSubmit = (e) => {
        e.preventDefault();

        const params = {
        ...(!!type && { project_type: type }),
        ...(!!min_price && { min_budget: min_price }),
        ...(!!max_price && { max_budget: max_price }),
        };

        setShowFilter(false);
        filter(params);
    };

    const isFirstRun = useRef(true);
    useEffect (() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        if(max < max_price || min > max_price){
            setMaxPrice(max+1);
        }
        if(min > min_price){
            setMinPrice(min);
        }
    }, [min, max]);

    const clearFilters = () => {
        setMinPrice('');
        setMaxPrice('');
        setType('');
    };

    return (
        <div className="product-list-body-filter">
            <div
                className={`filter-box`}
            >
                <div className="section-title text-theme-primary"> <span>Filter</span></div>

                <form onSubmit={onSubmit}>
                    
                    <div className="accordion" id="filter_box_content">
                        <div className="accordion-item ">
                            <h2 className="accordion-header" id="headingOne">
                                <div className="accordion-button" type="button" data-toggle="collapse" data-target="#price_filter" aria-expanded="true" aria-controls="price_filter">
                                    <span className>Price</span>  <span className="accordion-icon chevron"></span>
                                </div>
                            </h2>
                            <div id="price_filter" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-parent="#filter_box_content">
                                <div className="accordion-body">
                                    <MultiRangeSlider min={min} max={max} minVal={min_price} maxVal={max_price} name="price" onChange={(name, min, max) => {setMinPrice(min); setMaxPrice(max)}} minVal={min_price} maxVal={max_price} />
                                </div>
                            </div>
                        </div>

                        {/* <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <div className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#invertory_status_filter" aria-expanded="false" aria-controls="invertory_status_filter">
                                    <span className>Inventory Status</span>  <span className="accordion-icon chevron"></span>
                                </div>
                            </h2>
                            <div id="invertory_status_filter" className="accordion-collapse collapse" aria-labelledby="headingThree" data-parent="#filter_box_content">
                                <div className="accordion-body">
                                    Inventory Status
                                </div>
                            </div>
                        </div> */}

                    </div>
                </form>
            </div>
        </div>
    );
}

Filter.propTypes = {
    filter: PropTypes.func.isRequired,
    brands: PropTypes.array.isRequired,
    inventoryStatuses: PropTypes.array.isRequired,
};

export default Filter;
