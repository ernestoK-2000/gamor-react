import React from "react";
import { MdAdd } from "react-icons/md";
import Avatar from "./Avatar/Avatar";
import "./SearchGameRow.css";

interface Props {
  num: number;
  name: string;
  avatars: { url: string; color: string }[];
  setFollowing: (following: string[]) => void;
  following: string[];
}

function SearchGameRow({ num, name, avatars, following, setFollowing }: Props) {
  function onAddFollow(event: React.PointerEvent<HTMLButtonElement>){
    if(following.indexOf(name) === -1){
      setFollowing([...following, name])
    }
  }

  return (
    <li key={name} className="row-container">
      <div className="text-container">
        <div className="sgc-numeration">{num}</div>
        <div>{name}</div>
      </div>
      <div className="row-right">
        <Avatar
          url1="img/avatar1.svg"
          url2="img/avatar2.svg"
          color1={avatars.at(0)?.color}
          color2={avatars.at(1)?.color}
        />
        <button onClick={onAddFollow} className="nude-btn add-btn">
          <MdAdd style={{pointerEvents: "none"}}/>
        </button>
      </div>
    </li>
  );
}

export default SearchGameRow;
