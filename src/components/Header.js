import React from "react";
import Search from "./Search";

function Header({ setSearchTerm, searchTerm }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    </header>
  );
}

export default Header;
