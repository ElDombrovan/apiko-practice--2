import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [value, setInputValue] = useState();
  const onChangeInput = event => setInputValue(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (value === "") return;
    setQuery(value);
  };

  return (
    <form className="container-search" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChangeInput}
        placeholder="Type your query"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
