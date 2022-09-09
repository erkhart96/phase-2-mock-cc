import React from "react";

function Search({ setSearchTerm, searchTerm }) {
  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(e.target.value)
  }

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={onChangeHandler}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
