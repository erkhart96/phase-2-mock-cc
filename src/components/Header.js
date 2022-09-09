import React from "react";
import Search from "./Search";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
}

export default Header;
