import React from "react";
import "../Styles/Login.css";
import { accessUrl } from "../Spotify/Spotify";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosNewIcon from '@material-ui/icons/ArrowBackIos';

function Login() {
  return (
    <div className="login">
      <div className="login-sidebar">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <div className="icon-container"> 
          <HomeIcon className="icon"/>
          <span>Home</span>
        </div>
        <div className="icon-container">
          <SearchIcon className="icon"/>
          <span>Search</span>
        </div>
        <div className="icon-container">
          <LibraryMusicIcon className="icon"/>
          <span>Your Library</span>
        </div>
        <br/>
        <div className="icon-container">
          <AddBoxIcon className="icon"/>
          <span>Create PLaylist</span>
        </div>  
        <div className="icon-container">
          <FavoriteIcon className="icon"/>
          <span>Liked Songs</span>
        </div>
      </div>

      <div className="login-header">
        <div className="login-header-left">
          <ArrowBackIosNewIcon className="header-icon"/>
          <ArrowForwardIosIcon className="header-icon"/>
        </div>  

        <div className="login-header-right">
          <a className="sign-up" href={accessUrl}>SIGN UP</a>
          <a className="log-in" href={accessUrl}>LOG IN</a>
        </div>
      </div>

      <div className="login-body">
         <h1>
           India's best music app
           <span className="signUpText">Sign up for free to start listening</span>
         </h1>
         <span>
           Created by BHOLU TIWARI @spotify-clone
         </span>
      </div>

    </div>
  );
}

export default Login;

