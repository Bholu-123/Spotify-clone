import React from 'react'
import {useStateValue} from '../Context/StateProvider';
import '../Styles/ReccomendedSonglist.css';

function ReccomendedSonglist({track,id}) {
    const[{token,discoverPlaylist,spotify},dispatch]= useStateValue();
   
    const addSongsToPlaylist = () => {
        spotify.addTracksToPlaylist(id,track.uri).then((res) =>{
            console.log('res')
        })
        
    }
    return (
        <div className="reccomended-songlist-container">
            <div className="reccomended-songlist">
                <img 
                 src={track.album.images[0].url}
                  alt=""
                />

                <div className="reccomended-songlist-info">
                    <h3>{track.name}</h3>
                    <p className="reccomended-songlist-artistName">
                        {track.artists.map((artist) => artist.name).join(", ")}  
                    </p>
                </div>
           </div>

           <button className="add-to-playlist" onClick={addSongsToPlaylist}>Add To Playlist</button>
        </div>
    )
}

export default ReccomendedSonglist
