import React from "react";

const LibrarySongs = ({ currentSong, song, setCurrentSong, id }) => {
  function selectSongHandler() {
    const currentPlaying = song.filter((item) => item.id === id);
    setCurrentSong(currentPlaying[0]);
  }

  return (
    <div onClick={selectSongHandler} className="library-song">
      <img src={currentSong.cover} alt={currentSong.song}></img>
      <div className="song-description">
        <h3>{currentSong.song}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
