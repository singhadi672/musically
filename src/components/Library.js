import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({
  song,
  setCurrentSong,
  SetCurrentTime,
  audioRef,
  isPlaying,
  setSong,
  setLibraryStatus,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "library-active" : ""}`}>
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
            setSong={setSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
