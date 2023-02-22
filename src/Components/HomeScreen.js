import React, { useRef, useState } from "react";
import "./HomeScreen.css";
import Navbar from "./Navbar";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import SearchBox from "./SearchScreen/SearchBox";

function HomeScreen() {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  // const [Input, setInput] = useState("");

  // const search = (e) => {
  //   e.preventDefault();
  //   const term = searchInputRef.current.value;
  //   setInput(term);
  //   navigate("/search");
  // };

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
    navigate("/search", { state: { results } });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="search">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google logo"
            className="logo"
          />
          <form className="search">
            <div className="Search__Input">
             

              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search Google or type a URL"
                value={query}
                onChange={handleChange}
              />
              <MicIcon />
            </div>
          </form>
          <span style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <button type="submit" onClick={handleSubmit}>
              Google Search
            </button>
            <button onClick={handleSubmit}>I'm Feeling Lucky</button>
          </span>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
