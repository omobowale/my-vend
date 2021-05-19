import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './AutoComplete.scss';
import { useHistory } from 'react-router-dom';

function AutoComplete({
  suggestions,
  elementClass,
  toggleSearchMode,
  clearSearchQuery,
  search,
}) {
  const [showSuggestion, toggleShowSuggestions] = useState(true);
  const wrapperRef = useRef(null);
  const history = useHistory();

  const useOutsideAlerter = (ref) => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleShowSuggestions(false);
      }
    };

    useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  useEffect(() => {
    if (suggestions.length > 1) {
      console.log(suggestions);
      toggleShowSuggestions(true);
    }
  }, [suggestions]);

  useOutsideAlerter(wrapperRef);

  const replaceSpaces = (string) => {
    return string
      .trim()
      .split(' ')
      .filter((word) => word.length > 0)
      .join('+');
  };

  const searchSuggestion = (sugg) => {
    const refinedString = replaceSpaces(sugg);
    if (refinedString.length > 0) {
      toggleShowSuggestions(false);
      clearSearchQuery && clearSearchQuery();
      toggleSearchMode && toggleSearchMode();
      search
        ? search(sugg)
        : history.push(`/profile-search?query=${refinedString}`);
    }
  };

  return showSuggestion ? (
    <ul className={`autocomplete ${elementClass}`} ref={wrapperRef}>
      {suggestions.map((sugg, index) => {
        return (
          <a href="#0" key={index} onClick={(e) => searchSuggestion(sugg, e)}>
            <li>{sugg}</li>
          </a>
        );
      })}
    </ul>
  ) : null;
}

AutoComplete.propTypes = {
  suggestions: PropTypes.array,
  className: PropTypes.string,
  clearSearchQuery: PropTypes.func,
  search: PropTypes.func,
};

export default AutoComplete;
