import React, { useState } from "react";
import "./SearchScreen.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";
import SearchBox from './SearchBox';



function SearchScreen({results}) {
  

  const [Input, setInput] = useState("");
  
  return (
    <div>
      <div className="SearchBar">
        
        <img alt="img"
          className="google__Image"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        />
        <div>
          <form>
            <div className="Search__Input">
              <input
                type="text"
                placeholder="Search Google or type a URL"
                value={Input}
                onChange={(event) => setInput(event.target.value)}
              />
              <MicIcon />
            </div>
          </form>
          <div className="searchPage_Options">
            <div className="Allbtn">
              <SearchIcon />
              <Link style={{ color: "#5f6368" }} to="/all">
                All
              </Link>
            </div>
            <div className="Allbtn">
              <NewspaperIcon />
              <Link style={{ color: "#5f6368" }} to="/all">
                News
              </Link>
            </div>
            <div className="Allbtn">
              <OndemandVideoIcon />
              <Link style={{ color: "#5f6368" }} to="/all">
                Videos
              </Link>
            </div>
            <div className="Allbtn">
              <ImageSearchIcon />
              <Link style={{ color: "#5f6368" }} to="/all">
                Images
              </Link>
            </div>
            <div className="Allbtn">
              <LocalOfferIcon c />
              <Link style={{ color: "#5f6368" }} to="/all">
                Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
     
      
      <div className="Full_divSearch">
      <div className="search__results">

      <SearchBox/>

        <p className="searchPage_resultCount">
          About {results?.searchInformation.formattedTotalResults} results (0.28 seconds)
        </p>
      </div>
      
      <div className="searchResult">
        <a href="#" className="SearchPageResult_Link">
          GitHub.com
        </a>
        <a href="#"  className="SearchPageResult_Title">
          <h4>CamelCode</h4>

        </a>
        <p className="search_page_description">camel-cdr has 22 repositories available. Follow their code on GitHub.</p>
      </div>
      </div>
    </div>
  );
}

export default SearchScreen;
