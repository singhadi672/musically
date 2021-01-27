import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className="nav">
      <h1>Musical-ly</h1>
      <button
        onClick={() => {
          libraryStatus ? setLibraryStatus(false) : setLibraryStatus(true);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
