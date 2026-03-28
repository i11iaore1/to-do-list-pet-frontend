import { useState } from "react";
import SearchIcon from "../../../../components/icons/SearchIcon";

import s from "./Search.module.css";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  // зв'язати із фільтрами
  // оновлювати значення у фільтрах лише після затримки
  // щоб робити менше запитів при послідовному друку

  return (
    <div className={s["search-container"]}>
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
