import React, { useEffect} from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "../Context/StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "../Spotify/Spotify";
import "../Styles/App.css";
import Login from "./Login";

const spotify=new SpotifyWebApi();

const App = () =>{
    //using this line we can pull any state variable from reducer
    const [{token,id}, dispatch] = useStateValue();
    
    //any time we change our token and dispatch any action the component will rerender
    useEffect(()=>{
        const hash=getTokenFromResponse();
        window.location.hash="";
        let _token=hash.access_token;

        if(_token){
            spotify.setAccessToken(_token);
            
            //dispatch our action of type SET_TOKEN
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });

            dispatch({
                type: "SET_SPOTIFY",
                spotify: spotify,
            });

            spotify.getMe().then((user)=>{
                dispatch({
                    type: "SET_USER",
                    user: user,
                })
            });
              
            //get playlist from spotify and dispatch a
            //action of set playlist where we set our playlist state variable
            spotify.getUserPlaylists().then((playlist)=>{
                dispatch({
                    type: "SET_PLAYLIST",
                    playlists: playlist,
                })
            });
            
            //here we are getting our discover weekly playlist 
            spotify.getPlaylist("37i9dQZEVXcOKUmmRy39Un").then((response) =>{
                dispatch({
                    type: "SET_DISCOVER_PLAYLIST",
                    discoverPlaylist: response,
                })
            });
        }
    },[token,dispatch,id])

    return(
        <div className="App">
            {!token && <Login/>}
            {token && <Player/>}
        </div>
    );
}

export default App;


