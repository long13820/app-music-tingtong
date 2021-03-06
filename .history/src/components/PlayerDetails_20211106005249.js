import React from 'react'

function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            <div className ="details-img">
                <img src="" alt="" />
            </div>
            <h3 className="details-title">{props.song.title}</h3>
            <h4 className="details-artist">{props.song.arti}</h4>
        </div>
    )
}

export default PlayerDetails
