//rfce : structure keys

import React, {useState,useRef,useEffect} from 'react'
import PlayerDetails  from './PlayerDetails';
import PlayerControls from './PlayerControls';
function Player(props) {
    const audioEl =us

    return (
        <div className="c-player">
            <audio></audio>
            <h4>Playing now</h4>
            <PlayerDetails song = {props.song}/>
            <PlayerControls />
            <p><strong>Next up:</strong>{props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
    )
}

export default Player;
