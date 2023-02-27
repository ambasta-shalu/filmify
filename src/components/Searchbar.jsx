import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Searchbar() {
  const [searchInput, setsearchInput] = useState("");

  const handleSearchInput = function (e) {
    setsearchInput(e.target.value);
  };

  const handleSearch = function () {
    console.log("Search icon clicked");
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
