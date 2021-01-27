import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({
  song,
  setCurrentSong,
  SetCurrentTime,
  audioRef,
  isPlaying,
}) => {
  return (
    <div className="library">
      <h1>Library</h1>
      <div className="library-songs">
        {song.map((item) => (
          <LibrarySongs
            currentSong={item}
            song={song}
            setCurrentSong={setCurrentSong}
            key={item.id}
            id={item.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
