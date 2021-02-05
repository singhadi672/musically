import React, { useState, useRef } from "react";

//adding components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

//adding the data
import data from "./UtilData";

//adding styles
import "./styles/app.scss";

function App() {
  const [song, setSong] = useState(data());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(song[0]);
  const [currentTime, SetCurrentTime] = useState({
    duration: 0,
    current: 0,
    animation: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);

  function timeUpdateHandler(e) {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    let currentTime = Math.floor(current);
    let durationTime = Math.floor(duration);
    let animatePercentage = Math.floor((currentTime / durationTime) * 100);
    SetCurrentTime({
      ...currentTime,
      duration,
      current,
      animation: animatePercentage,
    });
  }

  async function songEndHandler() {
    const currentSongIndex = song.findIndex(
      (item) => item.id === currentSong.id
    );
    await setCurrentSong(song[(currentSongIndex + 1) % song.length]);

    if (isPlaying) {
      audioRef.current.play();
    }
  }

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        currentTime={currentTime}
        SetCurrentTime={SetCurrentTime}
        setCurrentSong={setCurrentSong}
        song={song}
        setSong={setSong}
      />
      <Library
        song={song}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSong={setSong}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
