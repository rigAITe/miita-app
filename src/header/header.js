import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import  { ReactComponent as Logo } from "../assets/Logo.svg"
import { NavLink } from 'react-router-dom'
import "./header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
      <div className="header fadeHeader">
        <div className="logo-nav">
          <div className="logo-container">
            <NavLink exact to='/'>
              <Logo className="logo" />
            </NavLink>
          </div>
          <div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <NavLink to='/developers'>Developers</NavLink>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <NavLink to='/faq' >FAQ</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
  );
};

export default Header;
