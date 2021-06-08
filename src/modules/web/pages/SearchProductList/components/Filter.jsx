import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MultiRangeSlider from '../../../../../components/common/InputField/MultipleRangeSlider';
// import PriceInput from '../../../../../components/common/PriceInput/PriceInput';

function Filter({ filter, min, max, brands = [{name: 'Local', slug: 'local'}, {name: 'Presto', slug: 'presto'}, {name: 'TopSteel', slug: 'topsteel'}], onPage }) {
    const [min_price, setMinPrice] = useState(min);
    const [max_price, setMaxPrice] = useState(max);
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
        setBand('');
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
                                    <MultiRangeSlider min={min} max={max} minVal={min_price} maxVal={max_price}name="price" onChange={(name, min, max) => {setMinPrice(min); setMaxPrice(max)}} minVal={min_price} maxVal={max_price} />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <div className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#brand_filter" aria-expanded="false" aria-controls="brand_filter">
                                    <span className>Brand</span>  <span className="accordion-icon chevron"></span>
                                </div>
                            </h2>
                            <div id="brand_filter" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-parent="#filter_box_content">
                                <div className="accordion-body">
                                    {brands.map((option, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="custom-control custom-checkbox mt-2"
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
