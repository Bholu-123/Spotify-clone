import React,{useState,useEffect} from 'react'
import "../Styles/Header.css";
import { useStateValue } from "../Context/StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
  const [{user,discoverPlaylist,token,spotify,searchResults}, dispatch] = useStateValue();
  const [searchTerm,setSearchTerm] = useState("");

  useEffect(() => {  
    if(!searchTerm)
    {
      return;
    }

    if(!token)
      return;
    
    let cancel=false;
    spotify.searchTracks(searchTerm).then(res => {
      if(cancel)
         return;

      dispatch({
        type: "SET_SEARCH_RESULTS",
        searchResults: res.tracks,
      })

      dispatch({
        type: "SET_DISCOVER_PLAYLIST",
        discoverPlaylist: null,
      })

      dispatch({
        type: "SET_LIKED_SONGS",
        likedSongs: null,
      })
    })

    return ()=>(cancel = true)
  },[searchTerm,token]);

  return (
    <div className="header">
      {!searchResults && <h4 className="header-logo">{discoverPlaylist?.name}</h4>}
      {searchResults && <h4 className="header-logo">Top Result</h4>}

      <div className="header-search">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
        <ArrowDropDownIcon />
      </div>

    </div>
  );
}
  
export default Header;
