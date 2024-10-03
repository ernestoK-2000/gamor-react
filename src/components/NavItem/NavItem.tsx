import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import './NavItem.css'

interface Props {
    text: string;
  }

const NavItem = ({text}: Props) => {
  console.log(text);
  return (
    <div className="container">
      <div className="ellipse"></div>
      <div className="text">{text}</div>
    </div>
  );
};

export default NavItem;
