import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import "../Styles/Footer.css";
import { useStateValue } from "../Context/StateProvider";

export default function Footer() {
  const [{ songUri, token }, dispatch] = useStateValue();
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [songUri]);

  if (!token) return null;
  return (
    <SpotifyPlayer
      token={token}
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      initialVolume={0.5}
      showSaveIcon={true}
      autoPlay={false}
      uris={songUri ? [songUri] : []}
    />
  );
}
