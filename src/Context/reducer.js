export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discoverPlaylist: null,
  item: null,
  token:null,
  searchResults: null,
  likedSongs: null,
  playlistNumbr:1,
  reccomendedSongs: null,
};

const reducer = (state,action) =>{
  switch(action.type){
    case "SET_TOKEN":
      return{
          ...state,
          token: action.token,
      };

    case "SET_USER":
      return{
          ...state,
          user: action.user,
      };
      
    case "SET_SPOTIFY":
      return{
        ...state,
        spotify: action.spotify,
      }
      
    case "SET_PLAYLIST":
      return{
          ...state,
          playlists:action.playlists
      }
      
    case "SET_DISCOVER_PLAYLIST":
      return{
        ...state,
        discoverPlaylist: action.discoverPlaylist,
      }

    case "SET_ITEM":
      return{
        ...state,
        item: action.item,
      }

    case "SET_PLAYING":
      return{
        ...state,
        playing: action.playing,
      }

    case "SET_SEARCH_RESULTS":
      return{
        ...state,
        searchResults: action.searchResults,
      }

    case "SET_LIKED_SONGS":
      return{
        ...state,
        likedSongs: action.likedSongs,
      }

    case "SET_PLAYLIST_NUMBR":
      return{
        ...state,
        playlistNumbr: action.playlistNumbr,
      }
    case "SET_RECCOMENDED_SONGS":
      return {
        ...state,
        reccomendedSongs: action.reccomendedSongs,
      }
      
    default:
      return state; 
  }
}

export default reducer;