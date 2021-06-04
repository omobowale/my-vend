import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AutoComplete from '../../../common/autocomplete/AutoComplete';
import { getSuggestions } from '../../../../modules/web/service';

const LgSearchForm = (props) => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        setValue('');

        // searchValue(value);
    };

    const changeToSearchMode = () => {
        props.changeMode('search_mode');
    };

    const changeToNormalMode = () => {
        props.changeMode('');
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const inputHandler = async (e) => {
        const data = await getSuggestions({query: e.target.value});

        setSuggestions(data);
    };

    const clearSearchQuery = () => {
        setValue('');
    };

    return (
        <div className="main-search-form">
            <form className="form" onSubmit={submitForm} autoComplete="off">
                <div className="search-field">
                    <input
                        type="text"
                        value={value}
                        placeholder="Search here for materials , supliers and contractors"
                        onChange={handleChange}
                        onFocus={changeToSearchMode}
                        onBlur={changeToNormalMode}
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
            </form>
        </div>
    );
};

export default LgSearchForm;
