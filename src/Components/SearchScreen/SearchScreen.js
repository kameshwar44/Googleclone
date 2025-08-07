import React, { useState } from "react";
import "./SearchScreen.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SearchScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(location.state?.query || "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Get results from navigation state
  const searchData = location.state?.results;
  const results = searchData?.items || [];
  const searchInfo = searchData?.searchInformation;

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
      
      // Update the current page with new results
      navigate("/search", { state: { results: data, query }, replace: true });
    } catch (error) {
      console.error("Search error:", error);
      setError(`Search failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (error) setError("");
  };

  return (
    <div>
      <div className="SearchBar">
        <Link to="/">
          <img 
            alt="Google logo"
            className="google__Image"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          />
        </Link>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="Search__Input">
              <input
                type="text"
                placeholder="Search Google or type a URL"
                value={query}
                onChange={handleInputChange}
                disabled={isLoading}
                aria-label="Search input"
              />
              <MicIcon />
            </div>
          </form>
          {error && (
            <div className="error-message" style={{color: 'red', fontSize: '14px', marginTop: '8px'}}>
              {error}
            </div>
          )}
          <div className="searchPage_Options">
            <div className="Allbtn">
              <SearchIcon />
              <Link style={{ color: "#5f6368" }} to="/search">
                All
              </Link>
            </div>
            <div className="Allbtn">
              <NewspaperIcon />
              <Link style={{ color: "#5f6368" }} to="/news">
                News
              </Link>
            </div>
            <div className="Allbtn">
              <OndemandVideoIcon />
              <Link style={{ color: "#5f6368" }} to="/videos">
                Videos
              </Link>
            </div>
            <div className="Allbtn">
              <ImageSearchIcon />
              <Link style={{ color: "#5f6368" }} to="/images">
                Images
              </Link>
            </div>
            <div className="Allbtn">
              <LocalOfferIcon />
              <Link style={{ color: "#5f6368" }} to="/shopping">
                Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
     
      <div className="Full_divSearch">
        <div className="search__results">
          {isLoading ? (
            <p>Searching...</p>
          ) : searchInfo ? (
            <p className="searchPage_resultCount">
              About {searchInfo.formattedTotalResults} results ({searchInfo.formattedSearchTime} seconds)
            </p>
          ) : (
            <p className="searchPage_resultCount">No search performed yet</p>
          )}
        </div>
        
        <div className="searchResults">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div key={item.cacheId || index} className="searchResult">
                <a 
                  href={item.link} 
                  className="SearchPageResult_Link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.displayLink}
                </a>
                <a 
                  href={item.link}
                  className="SearchPageResult_Title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>{item.title}</h4>
                </a>
                <p className="search_page_description">{item.snippet}</p>
              </div>
            ))
          ) : searchData && !isLoading ? (
            <div className="no-results">
              <p>No results found for "{query}"</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SearchScreen;
