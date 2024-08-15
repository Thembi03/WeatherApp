import React, { useState } from 'react';
import './Searchbar.css'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-bar-container" onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter City"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
