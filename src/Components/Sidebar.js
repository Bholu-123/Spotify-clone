import React from 'react'
import '../Styles/Sidebar.css';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStateValue } from '../Context/StateProvider';

const Sidebar = () => {

  //pull playlist from reducer
  const [{playlists,spotify,token,user,playlistNumbr},dispatch]=useStateValue();
  
  //get our playlst based on id and dispatch them
  const showPlaylist = (id) => {
    spotify.getPlaylist(id).then((response) =>

      dispatch({
        type: "SET_DISCOVER_PLAYLIST",
        discoverPlaylist: response,
      }) 
      
    );

    dispatch({
      type: "SET_SEARCH_RESULTS",
      searchResults: null,
    })

    dispatch({
      type: "SET_LIKED_SONGS",
      likedSongs: null,
    })

    dispatch({
      type: "SET_RECCOMENDED_SONGS",
      reccomendedSongs: null,
    })
  }

  const createPlaylist = async () => {

    dispatch({
      type: "SET_PLAYLIST_NUMBR",
      playlistNumbr: playlistNumbr+1,
    })

    // Create empty playlist and retrieve endpoint
    const emptyPlaylist = await fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
      method: 'POST',
      body: JSON.stringify({
        'name': `My Playlist #${playlistNumbr}`,
        'description': 'Created',
        'public': false,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }).then(() =>{
      console.log('Create playlist');
      spotify.getUserPlaylists().then((playlist)=>{
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlist,
        })
      });
    })
  }

  const getFavSongs = () => {
    spotify.getMySavedTracks({
      limit : 50,
      offset: 1
    }).then((res)=>{
      dispatch({
        type: "SET_LIKED_SONGS",
        likedSongs:res.items,
      })
    });

    dispatch({
      type: "SET_SEARCH_RESULTS",
      searchResults: null,
    })

    dispatch({
      type: "SET_DISCOVER_PLAYLIST",
      discoverPlaylist: null,
    })
    
  }

  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-Img"
      /> 
      <SidebarOption Icon={HomeIcon} option="Home"/>
      <SidebarOption Icon={SearchIcon} option="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} option="Library"/>
      <br/>
      <div className="fnsIcon" onClick={createPlaylist}>
        <AddBoxIcon className="icon"/>
        <span>Create PLaylist</span>
      </div>
      <div className="fnsIcon" onClick={getFavSongs}>
        <FavoriteIcon className="icon"/>
        <span>Liked Songs</span>
      </div>
      <br/>
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      <div className="sidebar-playlist">
        {playlists?.items?.map((playlist) => (
          <p onClick={() => showPlaylist(playlist.id)}>{playlist.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

