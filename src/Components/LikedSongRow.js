import React from "react";
import "../Styles/LikedSongRow.css";
import "../Styles/LikedSongs.css";
import { useStateValue } from "../Context/StateProvider";

const LikedSongRow = ({ track, duration }) => {
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
    <div className="LikedSongRow" onClick={() => PlaySong(track.uri)}>
      <div className="LikedSongRow-title">
        <img
          className="LikedSongRow-titleImg"
          src={track.album.images[0].url}
          alt=""
        />
        <div className="LikedSongRow-titleContent">
          <span className="track-name">{track.name}</span>
          <span className="LikedSongRow-artistName">
            {track.artists.map((artist) => artist.name).join(", ")}
          </span>
        </div>
      </div>
      <span className="LikedSongRow-albumName">{track.album.name}</span>
      <span className="LikedSongRow-albumRelease">
        {track.album.release_date}
      </span>
      <span className="LikedSongRow-infoDuration">{trackTime}</span>
    </div>
  );
};

export default LikedSongRow;
