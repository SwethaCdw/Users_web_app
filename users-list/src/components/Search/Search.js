import React, { useState } from 'react';
import './Search.css';
import { FaSearch } from 'react-icons/fa';
import { SEARCH_PLACEHOLDER } from '../../constants/constants';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * set the search term value and use that to filter the users
   * @param {*} event 
   */
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className='search-container'>
        <FaSearch className="search-icon" /> 
        <input
            type="search"
            className='search-input'
            placeholder={SEARCH_PLACEHOLDER}
            value={searchTerm}
            onChange={handleSearchChange}
        />
    </div>
  );
}

export default Search;