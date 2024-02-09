import React from "react";
import { NavLink } from "react-router-dom";
import style from '../../Styles/Components/Nav.scss'

const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink to="/" className="nav-header__nav-link-home">
        Accueil
      </NavLink>
      <NavLink to="/Apropos" className="nav-header__nav-link-about">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;