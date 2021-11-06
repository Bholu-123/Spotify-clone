import React from 'react'
import '../Styles/SongRow.css';
import '../Styles/Body.css';

const SongRow = ({ track,duration}) =>{

  // Song Duration
  var minutes = Math.floor(track.duration_ms / 60000);
  var seconds = ((track.duration_ms % 60000) / 1000).toFixed(0);
  var trackTime = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

  return (  
    <div className="songRow">
      
      <img 
        className="songRow-album"
        src={track.album.images[0].url}
        alt=""
      />

      <div className="songRow-info">
          <h1>{track.name}</h1>
          <p className="songRow-artistName">
            {track.artists.map((artist) => artist.name).join(", ")}  
          </p>
          <p className="songRow-albumName">{track.album.name}</p>
          <p className="songRow-albumRelease" >{ track.album.release_date }</p>
          <span className="songRow-infoDuration">{
            trackTime
          }</span>
      </div>

    </div>
  )
}


export default SongRow