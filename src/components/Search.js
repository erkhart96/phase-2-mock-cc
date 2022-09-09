import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

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
