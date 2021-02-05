import React from "react";

const LibrarySongs = ({
  currentSong,
  song,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSong,
}) => {
  async function selectSongHandler() {
    const currentPlaying = song.filter((item) => item.id === id);
    await setCurrentSong(currentPlaying[0]);
    const activeSong = song.map((item) => {
      if (item.id === id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    setSong(activeSong);

    if (isPlaying) {
      audioRef.current.play();
    }
  }

  return (
    <div
      onClick={selectSongHandler}
      className={`library-song ${currentSong.active ? "selected" : ""}`}
    >
      <img src={currentSong.cover} alt={currentSong.song}></img>
      <div className="song-description">
        <h3>{currentSong.song}</h3>
        <small>{currentSong.artist}</small>
      </div>
    </div>
  );
};

export default LibrarySongs;
