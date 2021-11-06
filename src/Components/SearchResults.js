import React from 'react';
import Header from './Header';
import DurationIcon from '@material-ui/icons/AccessTimeSharp';
import {useStateValue} from '../Context/StateProvider';
import '../Styles/SearchResults.css';
import SongRow from './SongRow';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const SearchResults = () => {

  const [{searchResults}, dispatch]=useStateValue();
  
  return (
      <div className="search-results">
          <Header/>
          
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
              {searchResults?.items.map((item) => (
                <SongRow track={item} duration={item.duration} />
              ))}
          </div>

      </div>
  );
}

export default SearchResults
