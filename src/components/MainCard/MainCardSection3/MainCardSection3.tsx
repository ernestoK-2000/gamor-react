import React from "react";
import "./MainCardSection3.css";
import Platform from "../../Platform/Platform";
import SearchGame from "../../SearchGame/SearchGame";

interface Props {
  setFollowing: (following: string[]) => void;
  following: string[];
}

function MainCardSection3({ following, setFollowing }: Props) {
  return (
    <div id="mcs3">
      <Platform></Platform>
      <SearchGame
        following={following}
        setFollowing={setFollowing}
      ></SearchGame>
    </div>
  );
}

export default MainCardSection3;
