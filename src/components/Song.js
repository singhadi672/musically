import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-desc">
      <img src={currentSong.cover} alt={currentSong.song}></img>
      <h2>{currentSong.song}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
