import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setIsPlaying, isPlaying }) => {
  const audioRef = useRef(null);
  const [currentIcon, SetCurrentIcon] = useState(faPlay);
  const [currentTime, SetCurrentTime] = useState({
    duration: 0,
    current: 0,
  });

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

  function timeUpdateHandler(e) {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    SetCurrentTime({ ...currentTime, duration, current });
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
          max={currentTime.duration}
          value={currentTime.current}
          onChange={inputDragHandler}
          type="range"
        />
        <p>{changeTime(currentTime.duration)}</p>
      </div>
      <div className="controls">
        <FontAwesomeIcon icon={faStepBackward} size="2x" />
        <FontAwesomeIcon
          icon={currentIcon}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon icon={faStepForward} size="2x" />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
