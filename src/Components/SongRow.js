import React from "react";
import "../Styles/SongRow.css";
import "../Styles/Body.css";
import { useStateValue } from "../Context/StateProvider";

const SongRow = ({ track, duration }) => {
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
    <div className="songRow" onClick={() => PlaySong(track.uri)}>
      <div className="songRow-title">
        <img
          className="songRow-titleImg"
          src={track.album.images[0].url}
          alt=""
        />
        <div className="songRow-titleContent">
          <span className="track-name">{track.name}</span>
          <span className="songRow-artistName">
            {track.artists.map((artist) => artist.name).join(", ")}
          </span>
        </div>
      </div>
      <span className="songRow-albumName">{track.album.name}</span>
      <span className="songRow-albumRelease">{track.album.release_date}</span>
      <span className="songRow-infoDuration">{trackTime}</span>
    </div>
  );
};

export default SongRow;
