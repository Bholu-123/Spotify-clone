import React from 'react'
import '../Styles/Footer.css';
import { useStateValue } from "../Context/StateProvider";

const Footer = () => {

    const [{item,playing},dispatch] = useStateValue();
    console.log(item);

    return (
        <div className="footer">
            {/* <div className="footer-left">
               <img
                 className="footer__albumLogo"
                 src={song?.album.images[0].url}
                 alt={song?.name}
               />
                {song ? (
                  <div className="footer__songInfo">
                     <h4>{song.name}</h4>
                     <p>{song.artists.map((artist) => artist.name).join(", ")}</p>
                  </div>
                ) : (
                  <div className="footer__songInfo">
                     <h4>No song is playing</h4>
                     <p>...</p>
                  </div>
                )}
            </div> */}

            <div className="footer-center">
               center
            </div>

            <div className="footer-right">
               right
            </div>
        </div>
    )
}

export default Footer
