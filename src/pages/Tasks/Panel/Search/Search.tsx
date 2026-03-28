import { useEffect, useState } from "react";
import SearchIcon from "../../../../components/icons/SearchIcon";

import s from "./Search.module.css";
import { useDescriptionFilter } from "../../../../contexts/TaskFilterContext/subContexts/DescriptionFilterContext";

const Search = () => {
  const REQUEST_DELAY_MS = 500;

  const { description, setDescription } = useDescriptionFilter();
  const [searchQuery, setSearchQuery] = useState<string>(description);

  // clear filters
  useEffect(() => {
    if (description === "") {
      setSearchQuery("");
    }
  }, [description]);

  // debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDescription(searchQuery);
    }, REQUEST_DELAY_MS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  return (
    <div className={s["search-container"]}>
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
