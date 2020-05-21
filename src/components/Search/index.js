import React, { memo } from "react";

import "./style.css";

const Search = ({ setSearch }) => {
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
