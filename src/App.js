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
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);

  function timeUpdateHandler(e) {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    SetCurrentTime({ ...currentTime, duration, current });
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
      ></audio>
    </div>
  );
}

export default App;
