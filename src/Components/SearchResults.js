import React from "react";
import Header from "./Header";
import DurationIcon from "@material-ui/icons/AccessTimeSharp";
import { useStateValue } from "../Context/StateProvider";
import "../Styles/SearchResults.css";
import SearchSongRow from "./SearchSongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const SearchResults = () => {
  const [{ searchResults }, dispatch] = useStateValue();

  return (
    <div className="search-results">
      <Header />

      <div className="search-results-icons">
        <PlayCircleFilledIcon className="search-results-shuffle icon-green" />
        <FavoriteIcon fontSize="large" />
        <MoreHorizIcon />
      </div>

      <ul className="search-results-songsHeader">
        <li className="search-results-songsNumber">
          <p>#</p>
        </li>
        <li className="search-results-songsTitle">
          <p>TITLE</p>
        </li>
        <li className="search-results-songsAlbum">
          <p>ALBUM</p>
        </li>
        <li className="search-results-songsRelease">
          <p>RELEASE</p>
        </li>
        <li className="search-results-songsDurationIcon">
          <DurationIcon className="search-results-duration" />
        </li>
      </ul>

      <div className="search-results-songNumber">
        {searchResults?.items.map((item) => (
          <SearchSongRow track={item} duration={item.duration} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
