import React from "react";

const SearchIcon = ({ toggleSearch }) => {
  return (
    <div onClick={toggleSearch} style={{ cursor: "pointer" }}>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchIcon;
