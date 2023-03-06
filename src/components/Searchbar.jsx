import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Searchbar(props) {
  const { searchFilms } = props;
  const [searchInput, setsearchInput] = useState("");

  const handleSearchInput = function (e) {
    setsearchInput(e.target.value);
  };

  const handleSearch = function () {
    searchFilms(searchInput);
  };

  return (
    <div className="searchbar">
      <input
        className="search-input"
        autoFocus
        type="search"
        placeholder="Search for Films"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <BsSearch className="search-icon" onClick={handleSearch} />
    </div>
  );
}

export default Searchbar;
