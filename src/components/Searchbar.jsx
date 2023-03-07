import React from "react";
import { BsSearch } from "react-icons/bs";

function Searchbar(props) {
  const { searchInput, setsearchInput, searchFilms } = props;

  const handleSearchInput = function (e) {
    setsearchInput(e.target.value);
  };

  const handleSearch = function () {
    if (searchInput.length > 0 && isAlpha(searchInput)) {
      searchFilms(searchInput);
    } else {
      alert(`${searchInput} not valid string`);
      setsearchInput("");
    }
  };

  const isAlpha = function (str) {
    return /^[a-zA-Z]+$/.test(str);
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
