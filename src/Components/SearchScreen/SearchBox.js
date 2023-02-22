import React, { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const API_KEY = "AIzaSyDSxXVJpl7mc_dOEN1Vyxvt_M5Cd3ZnSUs";
    const SEARCH_ENGINE_ID = "109043f99a393463f";
    const SEARCH_ENDPOINT = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${query}`;

    try {
      const response = await fetch(SEARCH_ENDPOINT);
      const data = await response.json();
      setResults(data.items); // store search results in state
      console.log(data); // log response to console
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((item) => (
          <li key={item.cacheId}>
            <a href={item.link}>{item.title}</a>
            <p>{item.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
