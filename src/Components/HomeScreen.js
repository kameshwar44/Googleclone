import React, { useRef, useState } from "react";
import "./HomeScreen.css";
import Navbar from "./Navbar";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search term");
      return;
    }

    setIsLoading(true);
    setError("");
    
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    const SEARCH_ENGINE_ID = process.env.REACT_APP_SEARCH_ENGINE_ID;
    
    if (!API_KEY || !SEARCH_ENGINE_ID) {
      setError("Search configuration is missing. Please check environment variables.");
      setIsLoading(false);
      return;
    }
    
    const SEARCH_ENDPOINT = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(SEARCH_ENDPOINT);
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }
      
      // Navigate to search page with results
      navigate("/search", { state: { results: data, query } });
    } catch (error) {
      console.error("Search error:", error);
      setError(`Search failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    if (error) setError(""); // Clear error when user types
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleLuckySearch = (event) => {
    event.preventDefault();
    // For "I'm Feeling Lucky", we could redirect to the first result
    // For now, just perform a regular search
    handleSearch();
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
          <form className="search" onSubmit={handleSubmit}>
            <div className="Search__Input">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search Google or type a URL"
                value={query}
                onChange={handleChange}
                disabled={isLoading}
                aria-label="Search input"
              />
              <MicIcon />
            </div>
            {error && (
              <div className="error-message" style={{color: 'red', fontSize: '14px', marginTop: '8px'}}>
                {error}
              </div>
            )}
          </form>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem", marginTop: "2rem" }}>
            <button 
              type="submit" 
              onClick={handleSubmit}
              disabled={isLoading}
              aria-label="Google Search"
            >
              {isLoading ? "Searching..." : "Google Search"}
            </button>
            <button 
              onClick={handleLuckySearch}
              disabled={isLoading}
              aria-label="I'm Feeling Lucky"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
