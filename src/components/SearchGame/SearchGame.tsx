import React from "react";
import "./SearchGame.css";
import SearchGameCard from "../SearchGameCard/SearchGameCard";

interface Props{
  setFollowing: (following: string[]) => void;
  following: string[];
}

function SearchGame({following, setFollowing}: Props) {
  return (
    <div id="searchgame-container">
      <div><span className="mcs3-numeration">02.</span> <span id="mcs3-text2">Searching Game</span></div>
      <SearchGameCard following={following} setFollowing={setFollowing}></SearchGameCard>
    </div>
  );
}

export default SearchGame;
