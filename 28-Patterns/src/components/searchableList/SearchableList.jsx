import React, { useRef, useState } from "react";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const lastChange = useRef();

  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleChange = (event) => {
    // clear the ongoing timer
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    //debouncing technique
    lastChange.current = setTimeout(() => {
      lastChange.current = null; //if timer expires, ref stores in the next keystroke
      setSearchTerm(event.target.value);
    }, 500);
  };
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
