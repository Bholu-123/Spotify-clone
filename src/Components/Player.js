import React from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';
import '../Styles/Player.css';
import SearchResults from './SearchResults';
import LikedSongs from './LikedSongs';
import { useStateValue } from '../Context/StateProvider';

const Player = () => {
    const [{searchResults,likedSongs,discoverPlaylist},dispatch]= useStateValue();

    return (
        <div className="Player">
            <div className="Player-body">
               <Sidebar/>
               {/* {discoverPlaylist?.owner.display_name==='Tiwari'?<OwnPlaylist/>:<Body/>} */}
               {discoverPlaylist?<Body/>:""}
               {searchResults?<SearchResults/>:""}
               {likedSongs?<LikedSongs/>:""}
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Player
