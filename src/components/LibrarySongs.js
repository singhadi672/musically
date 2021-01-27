import React from "react";

const LibrarySongs = ({
  currentSong,
  song,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
}) => {
  function selectSongHandler() {
    const currentPlaying = song.filter((item) => item.id === id);
    setCurrentSong(currentPlaying[0]);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
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
