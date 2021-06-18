import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AutoComplete from '../../../common/autocomplete/AutoComplete';
import { getSuggestions } from '../../../../modules/web/service';
import { searchValue } from '../../../../utils/search';

const MobileSearchForm = ({ toggleSearchMode }) => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        searchValue(value);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const inputHandler = async (e) => {
        const data = await getSuggestions({query: e.target.value});
        setSuggestions(data);
    };

    const clearSearchQuery = () => setValue('');

    return (
        <form onSubmit={submitForm} className="search-mobile" autoComplete="off">
            <div className="search-form">
                <div className="search-form-group">
                    <input
                        type="text"
                        value={value}
                        placeholder="Search here for materials , supliers and contractors"
                        onChange={handleChange}
                        // onFocus={changeToSearchMode}
                        // onBlur={changeToNormalMode}
                        onInput={inputHandler}
                        list="suggestions"
                    />
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                    </div>
                </div>
                {suggestions.length > 0 ? (
                    <AutoComplete
                        suggestions={suggestions}
                        elementClass="header-suggestions"
                        clearSearchQuery={clearSearchQuery}
                    />
                ) : null}
            </div>
        </form>
    );
};

export default MobileSearchForm;
