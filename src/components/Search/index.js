import React, { memo, useContext } from "react";

import "./style.css";

import { SearchContext } from "../../context/SearchContext";

const Search = () => {
  const { setSearch } = useContext(SearchContext);

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Busque pelo nome"
      ></input>
    </div>
  );
};

export default memo(Search);
