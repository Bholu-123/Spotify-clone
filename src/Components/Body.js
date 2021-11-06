import React from 'react';
import '../Styles/Body.css';
import { useStateValue } from '../Context/StateProvider';
import Header from './Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';
import { ControlPointDuplicate } from '@material-ui/icons';
import DurationIcon from '@material-ui/icons/AccessTimeSharp';
import OwnPlaylist from './OwnPlaylist';

const Body = () => {
  var dHours = Math.floor(4585515 / 3600)%24;
  var dMinutes = Math.floor(4585515 / 60000)%60;
  var dSeconds = ((4585515 % 60000) / 1000).toFixed(0);
  var dTrackTime = dHours + " hr " + dMinutes + " min ";

  const [{discoverPlaylist},dispatch] = useStateValue();

  //pass the playSong as props in songRow component and get id from that component song after clicking the song
  if(discoverPlaylist?.tracks.total<=5)
  {
    return <OwnPlaylist/>
  }

  return (
    <div className="body">

    <Header/>

    <div className="body-info">
      <img id="discover-profileImage" src={discoverPlaylist?.images[0].url} alt=""/>
      <div className="body-infoText">
        <strong>PLAYLIST</strong>
        <h2>{discoverPlaylist?.name}</h2>
        <p>
          <p>{discoverPlaylist?.description}</p>
          <a href="https://open.spotify.com/user/spotify">{discoverPlaylist?.owner.display_name}</a>
          &bull;<span>{discoverPlaylist?.tracks.total} songs</span> 
        </p>
      </div>
    </div>
    
    <div className="body-songs">
      <div className="body-icons">
        <PlayCircleFilledIcon className="body-shuffle icon-green" />
        <FavoriteIcon fontSize="large" />
        <MoreHorizIcon />
      </div>            

      <ul className="body-songsHeader">
        <li className="body-songsNumber"><p>#</p></li>
        <li className="body-songsTitle"><p>TITLE</p></li>
        <li className="body-songsAlbum"><p>ALBUM</p></li>
        <li className="body-songsRelease"><p>RELEASE</p></li>
        <li className="body-songsDurationIcon">
          <DurationIcon className="body-duration" />
        </li>
      </ul>

      <div className="body-songNumber">
        {discoverPlaylist?.tracks.items.map((item) => (
          <SongRow track={item.track} duration={item.duration} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Body
