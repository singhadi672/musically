import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
  SetCurrentTime,
  currentTime,
  song,
  setCurrentSong,
  setSong,
}) => {
  const [currentIcon, SetCurrentIcon] = useState(faPlay);
  useEffect(() => {
    const activeSong = song.map((item) => {
      if (item.id === currentSong.id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    setSong(activeSong);
  }, [currentSong]);

  function playSongHandler() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
      SetCurrentIcon(faPlay);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
      SetCurrentIcon(faPause);
    }
  }

  function skipSongHandler(direction) {
    const currentSongIndex = song.findIndex(
      (item) => item.id === currentSong.id
    );
    if (direction === "forward") {
      setCurrentSong(song[(currentSongIndex + 1) % song.length]);
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((audio) => {
            audioRef.current.play();
          });
        }
      }
    } else if (direction === "backward") {
      if (currentSongIndex - 1 === -1) {
        setCurrentSong(song[song.length - 1]);
        return;
      }
      setCurrentSong(song[currentSongIndex - 1]);
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((audio) => {
            audioRef.current.play();
          });
        }
      }
    }
  }

  function changeTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  function inputDragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    SetCurrentTime({ ...currentTime, current: e.target.value });
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{changeTime(currentTime.current)}</p>
        <input
          min={0}
          max={currentTime.duration || 0}
          value={currentTime.current}
          onChange={inputDragHandler}
          type="range"
        />
        <p>{changeTime(currentTime.duration)}</p>
      </div>
      <div className="controls">
        <FontAwesomeIcon
          onClick={() => {
            skipSongHandler("backward");
          }}
          icon={faStepBackward}
          size="2x"
        />
        <FontAwesomeIcon
          icon={currentIcon}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => {
            skipSongHandler("forward");
          }}
          icon={faStepForward}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
