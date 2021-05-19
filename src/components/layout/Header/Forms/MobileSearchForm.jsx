import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AutoComplete from '../../../common/autocomplete/AutoComplete';
// import { searchValue, getSuggestions } from '../../../../utils/search';

const MobileSearchForm = ({ toggleSearchMode }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    // searchValue(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const inputHandler = async (e) => {
    // const data = await getSuggestions(e.target.value);
    // setSuggestions(data);
  };

  const clearSearchQuery = () => setValue('');

  return (
    <form onSubmit={submitForm} autoComplete="off">
      <div className="search-mobile">
        <input
          type="text"
          placeholder="Search for anything"
          value={value}
          onChange={handleChange}
          onInput={inputHandler}
        />
        <FontAwesomeIcon icon={faSearch} />
        {suggestions.length > 0 ? (
          <AutoComplete
            suggestions={suggestions}
            elementClass="header-suggestions"
            clearSearchQuery={clearSearchQuery}
            toggleSearchMode={toggleSearchMode}
          />
        ) : null}
      </div>
    </form>
  );
};

export default MobileSearchForm;
