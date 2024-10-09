import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import "./NavItem.css";
import { Link, NavLink } from "react-router-dom";

interface Props {
  text: string;
  url: string;
  onCloseMenu: () => void;
}

const NavItem = ({ text, url, onCloseMenu }: Props) => {
  return (
    <li className="nav-item">
      <NavLink
        onClick={onCloseMenu}
        to={url}
        className={({ isActive, isPending }) =>
          isActive
            ? "activeE ellipse"
            : isPending
            ? "pending ellipse invisible"
            : "ellipse invisible"
        }
      ></NavLink>
      <NavLink
        to={url}
        className={({ isActive, isPending }) =>
          isActive ? "activeT text" : isPending ? "pending text" : "text"
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
