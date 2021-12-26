import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "../Context/StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "../Spotify/Spotify";
import "../Styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

import Sidebar from "./Sidebar";
import Body from "./Body";
import "../Styles/Player.css";
import SearchResults from "./SearchResults";
import LikedSongs from "./LikedSongs";
import Home from "./Home";
import Footer from "./Footer";

const spotify = new SpotifyWebApi();

const App = () => {
  //using this line we can pull any state variable from reducer
  const [{ token, id }, dispatch] = useStateValue();

  //any time we change our token and dispatch any action the component will rerender
  useEffect(() => {
    //getting token from response
    const hash = getTokenFromResponse();

    //clear the location hash
    window.location.hash = "";

    let _token = hash.access_token;

    //as soon as we are getting the token we will dispatch three action
    //1.set token
    //2.set spotify
    //3.set user
    if (_token) {
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

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      //get playlist from spotify and dispatch a
      //action of set playlist where we set our playlist state variable
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlist,
        });
      });

      //here we are getting our discover weekly playlist
      spotify.getPlaylist("37i9dQZEVXcOKUmmRy39Un").then((response) => {
        dispatch({
          type: "SET_DISCOVER_PLAYLIST",
          discoverPlaylist: response,
        });
      });
    }
  }, [token, dispatch, id]);

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={token ? Player : Login} />
          <Route
            path="/discoverPlaylist"
            exact
            component={token ? Body : Login}
          />
          <Route
            path="/search"
            exact
            component={token ? SearchResults : Login}
          />
          <Route
            path="/likedSongs"
            exact
            component={token ? LikedSongs : Login}
          />

          <Route path="/" exact component={token ? LikedSongs : Login} />
        </Switch>
        {token ? <Footer /> : ""}
      </Router>
    </div>
  );
};

export default App;
