import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';
import { getSuggestions } from '../../../utils/search';
import AutoComplete from '../autocomplete/AutoComplete';

function SearchBar({ query, search }) {
  const [text, setText] = useState(query);
  const [suggestions, setSuggestions] = useState([]);
  const componentHadMounted = useRef(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    text && search(text);
  };

  const searchFromSuggestion = (suggestion) => {
    setText(suggestion);
    search(suggestion);
  };

  useEffect(() => {
    if (text && componentHadMounted.current) {
      const debounce = setTimeout(async () => {
        const data = await getSuggestions(text);
        setSuggestions(data);
      }, 1000);

      return () => clearTimeout(debounce);
    }

    setSuggestions([]);
    componentHadMounted.current = true;
  }, [text]);

  return (
    <div className="container">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search for anything"
          />
          {suggestions.length > 0 && (
            <AutoComplete
              suggestions={suggestions}
              elementClass="suggestions"
              search={searchFromSuggestion}
            />
          )}
          <button className="square-butn butn--green" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
  search: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  query: '',
};

export default SearchBar;
