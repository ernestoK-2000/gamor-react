import React from "react";
import "./Avatar.css";

interface Props {
  url1: string;
  url2: string;
  color1: string | undefined;
  color2: string | undefined;
}

function Avatar({ url1, url2, color1, color2 }: Props) {
  const style = { "background-color": color1 } as React.CSSProperties;
  return (
    <div id="avatar-container">
      <img
        className="avatar img1"
        style={{ backgroundColor: color1 }}
        src={url1}
        alt="avatar1"
      />
      <img
        className="avatar img2"
        style={{ backgroundColor: color2 }}
        src={url2}
        alt="avatar2"
      />
    </div>
  );
}

export default Avatar;
