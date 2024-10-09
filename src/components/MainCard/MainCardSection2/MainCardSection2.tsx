import React from "react";
import "./MainCardSection2.css";
import { TiUserAdd } from "react-icons/ti";
import { AppTheme } from "../../../models/models";

interface Props {
  theme: AppTheme;
  following: string[];
}

function MainCardSection2({ theme, following }: Props) {
  let followingList = following.map((f, i) => <li key={i}>{f}</li>);
  return (
    <div id="mcs2">
      <div className="text-content">
        <div id="mcs2-title">Fortnite New Season</div>
        <div id="mcs2-text">Join Live Stream</div>
      </div>

      <div id="time">
        <div id="glassy">
          <TiUserAdd className="userAdd-icon" />
        </div>
        11 : 45
      </div>
      <div>{followingList}</div>

      <img
        id="img-fortnite"
        src={
          theme === AppTheme.LIGHT
            ? "img/fortnite_light.png"
            : "img/fortnite_dark.png"
        }
        alt="fortnite game character"
      />
    </div>
  );
}

export default MainCardSection2;
