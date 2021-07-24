import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Price from '../../../../../components/common/Price/Price';
// import { searchValue } from '../../../../utils/search';

const Search = (props) => {
    const [value, setValue] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        setValue('');

        props.handleSearch(value);
    };

    const changeToSearchMode = () => {
        // props.changeMode('search_mode');
    };

    const changeToNormalMode = () => {
        // props.changeMode('');
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const inputHandler = async (e) => {
        // const data = await getSuggestions({query: e.target.value});

        // setSuggestions(data);
    };

    const clearSearchQuery = () => {
        setValue('');
    };

    return (
        <div className="">
            <div className="section-form-title">Add Product</div>
            <form className="form" onSubmit={submitForm} autoComplete="off">
                <div className="compare-search-field">
                    <input
                        type="text"
                        value={value}
                        placeholder="Search by name"
                        onChange={handleChange}
                        onFocus={changeToSearchMode}
                        onBlur={changeToNormalMode}
                        onInput={inputHandler}
                        list="suggestions"
                    />
                    <button type="submit" className="search-icon">
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                    </button>
                </div>

            </form>

            <div className="result">
                <ul>
                    {props.products.map((product) => (
                        <li key={product.slug}>
                            <Link onClick={e => props.saveForCompare(e, product)}> 
                                <img src={product.image && product.image.length > 0 ? product.image[0]: null} />  
                                <div className="text"> <span>{product.name}</span>
                                    <div>
                                        <Price 
                                            currency={product.currency} 
                                            className=''
                                            noConversion="true"
                                            priceCurrencyId={product.currencyId} 
                                            price={product.price}
                                        />
                                    </div>
                                </div> 
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Search;
