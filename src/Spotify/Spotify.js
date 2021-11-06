// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "cad6058a63da4620aa6c1da42d1e3c61";
const redirectUri = "http://localhost:3000/";
const scopes = [
  'streaming',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-playback-state',
  'user-read-email',
  'user-read-private',
  'user-read-currently-playing',
  'user-modify-playback-state',
  'user-follow-modify',
  'user-follow-read',
];

//localhost 3000&accessToken=asdfghjkl&mynae=name
//this will get access token from this url 
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


//we are taking all the autorization part from spotify api in our clone app