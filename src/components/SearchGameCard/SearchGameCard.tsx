import React, { useRef, useState } from "react";
import "./SearchGameCard.css";
import SearchGameRow from "./SearchGameRow/SearchGameRow";
import { games } from "../../models/models";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

interface Props{
  setFollowing: (following: string[]) => void;
  following: string[];
}

function SearchGameCard({following, setFollowing}: Props) {
  const filterBtnRef = useRef<null | HTMLButtonElement>(null);
  const [currentGame, setCurrentGame] = useState(games.at(0))
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)

  function closeFilterMenu(){
    (document.activeElement as HTMLElement).blur()
    onFilterMenuClose()
  }
  function onFilterMenuClose(){
    setIsFilterMenuOpen(false)
  }
  function onClickFilterBtn(){
    if(isFilterMenuOpen){
      (document.activeElement as HTMLElement).blur()
    }else{
      filterBtnRef?.current?.focus()
      setIsFilterMenuOpen(true)
    }
  }
  function onFilterItemClick(event: React.PointerEvent<HTMLLIElement>){
    closeFilterMenu()
    setCurrentGame(games.find(g => g.name === (event.target as HTMLElement).innerText))
  }

  let listStreamers = currentGame?.streamers?.map((s, i) => (
    <SearchGameRow following={following} setFollowing={setFollowing} key={s.name} num={i + 1} name={s.name} avatars={s.avatars} />
  ));
  let listFilter = games.map(g => (
    <li onClick={onFilterItemClick} key={g.name}>{g.name}</li>
  ))
  return (
    <div id="sgc">
      <div id="sgc-header">
        <div>{currentGame?.name}</div>
        <button ref={filterBtnRef} onBlur={onFilterMenuClose} onClick={onClickFilterBtn} id="filter" className="nude-btn">
          <ul  className="filter-settings">
            {listFilter}
          </ul>
          <HiOutlineAdjustmentsHorizontal fontSize={"24px"}/>
          </button>
      </div>
      <hr />
      <ul id="sgc-list">{listStreamers}</ul>
    </div>
  );
}

export default SearchGameCard;
