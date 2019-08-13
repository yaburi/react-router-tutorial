import React from 'react';
import { Link } from 'react-router-dom';

// An API that returns a player object
import PlayerAPI from '../api';

function Player(props) {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    );

    if (!player) {
        return(
            <div>
                Sorry, but the player was not found
            </div>
        );
    }

    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>{player.position}</h2>
            <Link to='/roster'>Back</Link>
        </div>
    );
}

export default Player;