import React from "react";
import "../Styles/SearchSongRow.css";
import "../Styles/SearchResults.css";
import { useStateValue } from "../Context/StateProvider";

const SearchSongRow = ({ track, duration }) => {
  const [{}, dispatch] = useStateValue();
  // Song Duration
  var minutes = Math.floor(track.duration_ms / 60000);
  var seconds = ((track.duration_ms % 60000) / 1000).toFixed(0);
  var trackTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  const PlaySong = (uri) => {
    dispatch({
      type: "SET_URI",
      songUri: uri,
    });
  };

  return (
    <div className="SearchSongRow" onClick={() => PlaySong(track.uri)}>
      <div className="SearchSongRow-title">
        <img
          className="SearchSongRow-titleImg"
          src={track.album.images[0].url}
          alt=""
        />
        <div className="SearchSongRow-titleContent">
          <span className="track-name">{track.name}</span>
          <span className="SearchSongRow-artistName">
            {track.artists.map((artist) => artist.name).join(", ")}
          </span>
        </div>
      </div>
      <span className="SearchSongRow-albumName">{track.album.name}</span>
      <span className="SearchSongRow-albumRelease">
        {track.album.release_date}
      </span>
      <span className="SearchSongRow-infoDuration">{trackTime}</span>
    </div>
  );
};

export default SearchSongRow;
