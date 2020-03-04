import React from "react";
import { Link } from "react-router-dom";

const SearchBar = ({
  handleSearchSubmit,
  handleSearchChange,
  searchTerm,
  currentUser
}) => {
  return (
    <div className="feed-flex-container">
      <div className="feed-search">
        <form onSubmit={handleSearchSubmit} className="feed-form">
          <label htmlFor="searchbar" className="feed-search-label">
            Search:
          </label>
          <input
            type="text"
            name="searchterm"
            id="searchterm"
            className="feed-search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="search-button"></button>
        </form>
      </div>
      <div className="feed-post">
        <Link to={`/profile/${currentUser}/addrecipe`}>+ Recipe</Link>
      </div>
    </div>
  );
};

export default SearchBar;
