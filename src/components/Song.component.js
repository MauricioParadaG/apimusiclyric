import React from 'react';

const SongComponent = props => {

    if(props.apiLyricResultState.length === 0) return null;

    return (
        <>
            <h2>Lyric</h2>
            <p className="lyric">{props.apiLyricResultState}</p>
        </>
    )
}

export default SongComponent;
