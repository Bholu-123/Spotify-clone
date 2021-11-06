import React,{ useState,useEffect} from 'react';
import '../Styles/OwnPlaylist.css';
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../Context/StateProvider";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosNewIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from "@material-ui/icons/Search";
import image from '../Assets/images.jfif';
import ReccomendedSonglist from './ReccomendedSonglist';

function OwnPlaylist() {
    const [{user,discoverPlaylist,token,spotify,reccomendedSongs}, dispatch] = useStateValue();
    const [searchTerm,setSearchTerm] = useState("");
    
    useEffect(() => { 
        if(!searchTerm)
          return;

        if(!token)
           return;
        
        let cancel=false;
        spotify.searchTracks(searchTerm).then(res => {
          if(cancel)
             return;
            console.log(res);
          dispatch({
            type: "SET_RECCOMENDED_SONGS",
            reccomendedSongs: res.tracks,
          })
        })
    
        return ()=>(cancel = true)
    },[searchTerm]);
    
    return (
        <div className="own-playlist">
            
            <div className="header">
                <div className="header-left">
                    <ArrowBackIosNewIcon className="icon"/>
                    <ArrowForwardIosIcon className="icon"/>
                </div>

                <div className="header-right">
                    <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                    <h4>{user?.display_name}</h4>
                    <ArrowDropDownIcon />
                </div>
            </div>

            <div className="own-playlist-info">
                <img id="own-playlist-profileImage" src={image} alt=""/>
                <div className="own-playlist-infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discoverPlaylist?.name}</h2>
                    <p>created by</p>
                    <a href="https://open.spotify.com/user/spotify">{discoverPlaylist?.owner.display_name}</a>
                </div>
            </div>

            <hr/>

            <div className="own-playlist-search">
                <SearchIcon />
                <input
                  placeholder="Search for Artists, Songs, or Podcasts "
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
            </div>

            <h2 className="heading">Reccomended Songs</h2>
            {reccomendedSongs?.items.map((item) => (
                <ReccomendedSonglist track={item} id={discoverPlaylist.id}/>
            ))}

        </div>
    )
}
 
export default OwnPlaylist
