import React from "react";
import "./MainCardSection1.css";
import EllipsisDec from "../../EllipsisDec/EllipsisDec";
import { NavLink } from "react-router-dom";

function MainCardSection1() {
  return (
    <div id="main-card-section1">
      <div id="mcs1-title">
        start <span className="emphasis">streaming</span> games differently
      </div>
      <div id="mcs1-text">
        gamor now has{" "}
        <strong className="stream-party">
          stream party
          <hr className="underline" />
        </strong>{" "}
        platform
      </div>

      <div className="mcs1-btns">
        <NavLink to={"/signup"}>
          <button className="nude-btn mcs1-account-btn">Create account</button>
        </NavLink>
        <NavLink to={"/login"} className="mcs1-signin-btn">
          <button className="nude-btn ">Sign in</button>
        </NavLink>
      </div>
      <EllipsisDec id="ellipsis1" />
      <EllipsisDec id="ellipsis2"></EllipsisDec>
      <EllipsisDec id="ellipsis3"></EllipsisDec>
    </div>
  );
}

export default MainCardSection1;
