import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';
function PlayerControls() {
    return (
        <div className="c-player--controls">
            <button className="skip-btn">
                <FontAwesomeIcon></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default PlayerControls
