import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Body from "./Body";
import "../Styles/Player.css";
import SearchResults from "./SearchResults";
import LikedSongs from "./LikedSongs";
import { useStateValue } from "../Context/StateProvider";
import Home from "./Home";
import Header from "./Header";

const Player = () => {
  const [{ playlists, searchResults, likedSongs, discoverPlaylist }, dispatch] =
    useStateValue();

  return (
    <div className="Player">
      <div className="Player-body">
        <Sidebar />
        {discoverPlaylist ? <Body /> : ""}
        {searchResults ? <SearchResults /> : ""}
        {likedSongs ? <LikedSongs /> : ""}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Player;
