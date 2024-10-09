import React, { useState } from "react";
import "./MainCard.css";
import MainCardSection1 from "./MainCardSection1/MainCardSection1";
import MainCardSection2 from "./MainCardSection2/MainCardSection2";
import MainCardSection3 from "./MainCardSection3/MainCardSection3";
import { AppTheme } from "../../models/models";

interface Props{
  theme: AppTheme;
}

function MainCard({theme}: Props) {
  const [following, setFollowing] = useState<string[]>([])
  return (
    <div className="main-card">
      <MainCardSection1></MainCardSection1>
      <MainCardSection2 following={following} theme={theme}></MainCardSection2>
      <MainCardSection3 following={following} setFollowing={setFollowing}></MainCardSection3>
    </div>
  );
}

export default MainCard;
