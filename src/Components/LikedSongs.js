import React from 'react'
import Header from './Header';
import DurationIcon from '@material-ui/icons/AccessTimeSharp';
import {useStateValue} from '../Context/StateProvider';
import '../Styles/LikedSongs.css';
import SongRow from './SongRow';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import image from '../Assets/download.jfif'

const LikedSongs = () => {
  const [{likedSongs}, dispatch]=useStateValue();

  return (
      <div className="liked-songs">
          <Header/>

          <div className="liked-songs-info">
              <img id="discover-profileImage" src={image} alt=""/>
              <div className="liked-songs-infoText">
                  <strong>PLAYLIST</strong>
                  <h2>Liked Songs</h2>
                  <a href="https://open.spotify.com/user/spotify">Tiwari</a>
                  &bull;<span>156 songs,</span> 
              </div>
          </div>
          
          <div className="liked-songs-icons">
            <PlayCircleFilledIcon className="body-shuffle icon-green" />
          </div> 
          
          <ul className="liked-songs-songsHeader">
            <li className="liked-songs-songsNumber"><p>#</p></li>
            <li className="liked-songs-songsTitle"><p>TITLE</p></li>
            <li className="liked-songs-songsAlbum"><p>ALBUM</p></li>
            <li className="liked-songs-songsRelease"><p>RELEASE</p></li>
            <li className="liked-songs-songsDurationIcon">
              <DurationIcon className="liked-songs-duration" />
            </li>
          </ul>

          <div className="liked-songs-songNumber">
              {likedSongs?.map((item) => (
                <SongRow track={item.track} duration={item.track.duration} />
              ))}
          </div>
      </div>
  );
}

export default LikedSongs
