import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SellerSearchForm = ({ className }) => {
  const [query, setQuery] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    window.open(`/workstore?query=${query}`, '_blank');
    return false;
  };

  return (
    <form onSubmit={submitForm} autoComplete="off">
      <div className={className}>
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find Gigs"
        />
      </div>
    </form>
  );
};

export default SellerSearchForm;
