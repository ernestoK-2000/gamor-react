import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import './NavItem.css'
import { Link, NavLink } from "react-router-dom";

interface Props {
    text: string;
    url: string;
  }

const NavItem = ({text, url}: Props) => {
  return (
    <li className="nav-item">
      <NavLink to={url} className={({ isActive, isPending }) =>
                      isActive
                        ? "activeE ellipse"
                        : isPending
                        ? "pending ellipse"
                        : "ellipse"
                    } ></NavLink>
      <NavLink to={url} className={({ isActive, isPending }) =>
                      isActive
                        ? "activeT text"
                        : isPending
                        ? "pending text"
                        : "text"
                    }>{text}</NavLink>
    </li>
  );
};

export default NavItem;
