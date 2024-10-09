import React from "react";
import "./Platform.css";

function Platform() {
  return (
    <div id="platform-section">
      <div>
        <span className="mcs3-numeration">01.</span>{" "}
        <span id="mcs3-text1">Choose Platform</span>
      </div>
      <div className="platform-btn-container">
        <button className="nude-btn platform-btn active">🎉 Party</button>
        <button className="nude-btn platform-btn">Matchs</button>
        <button className="nude-btn platform-btn">Streams</button>
      </div>
    </div>
  );
}

export default Platform;
