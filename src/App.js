import React, { useState } from "react";

//adding components
import Song from "./components/Song";
import Player from "./components/Player";

//adding the data
import data from "./UtilData";

//adding styles
import "./styles/app.scss";

function App() {
  const [song, setSong] = useState(data());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(song[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
