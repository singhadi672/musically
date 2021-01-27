import React from "react";
import { playAudio } from "../Util";

const LibrarySongs = ({
  currentSong,
  song,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSong,
}) => {
  function selectSongHandler() {
    const currentPlaying = song.filter((item) => item.id === id);
    setCurrentSong(currentPlaying[0]);
    const activeSong = song.map((item) => {
      if (item.id === id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    setSong(activeSong);

    playAudio(isPlaying, audioRef);
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
