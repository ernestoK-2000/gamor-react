import React, { useRef, useState } from "react";
import "./NavBar.css";
import {
  MdAccountCircle,
  MdClose,
  MdDarkMode,
  MdLightMode,
  MdMenu,
} from "react-icons/md";
import NavItem from "../NavItem/NavItem";
import { AppTheme } from "../../models/models";
import { NavLink } from "react-router-dom";

interface Props {
  theme: string;
  setTheme: (theme: AppTheme) => void;
}

function NavBar({ theme, setTheme }: Props) {
  const menuRef = useRef<null | HTMLUListElement>(null);
  const userBtnRef = useRef<null | HTMLButtonElement>(null);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

  function onOpenMenu(): void {
    if (menuRef?.current) {
      menuRef.current.style.left = "0";
    }
  }
  function onCloseMenu(): void {
    if (menuRef?.current) {
      menuRef.current.style.left = "-242px";
    }
  }
  function onChangeTheme(themeType: AppTheme) {
    setTheme(themeType);
  }
  function closeUserMenu() {
    (document.activeElement as HTMLElement).blur();
    onUserMenuClose();
  }
  function onUserMenuClose() {
    setIsUserMenuOpen(false);
  }
  function onClickUserBtn() {
    if (isUserMenuOpen) {
      (document.activeElement as HTMLElement).blur();
    } else {
      userBtnRef?.current?.focus();
      setIsUserMenuOpen(true);
    }
  }

  return (
    <nav id="header">
      <ul ref={menuRef} id="sideMenu">
        <NavItem onCloseMenu={onCloseMenu} url="" text="Home" />
        <NavItem onCloseMenu={onCloseMenu} url="/Stream" text="Stream" />
        <NavItem onCloseMenu={onCloseMenu} url="/Party" text="Party" />
        <NavItem onCloseMenu={onCloseMenu} url="/Premium" text="Premium" />
        <MdClose className="icon icon-nav close-icon" onClick={onCloseMenu} />
      </ul>
      <MdMenu className="icon icon-nav menu-icon" onClick={onOpenMenu} />
      <div className="logotitle">
        <b>Gamor</b>
      </div>
      <div className="navBar-btns">
        <div className="userMenuHandler">
          <div onClick={closeUserMenu} className="navBar-btns user-btn">
            <NavLink to={"/login"}>
              <button className="signin-btn">Sign in</button>
            </NavLink>
            <NavLink to={"/signup"}>
              <button className="account-btn">Create account</button>
            </NavLink>
          </div>

          <button
            ref={userBtnRef}
            onBlur={onUserMenuClose}
            onClick={onClickUserBtn}
            id="userIconWrapper"
          >
            <MdAccountCircle className="icon icon-nav" />
          </button>
        </div>

        {theme === AppTheme.LIGHT ? (
          <MdDarkMode
            onClick={() => onChangeTheme(AppTheme.DARK)}
            className="icon icon-theme"
          />
        ) : (
          <MdLightMode
            onClick={() => onChangeTheme(AppTheme.LIGHT)}
            className="icon icon-theme"
          />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
