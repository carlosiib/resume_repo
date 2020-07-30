import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

const Nav = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <div className="nav-wrapper">
      <button className="side-btn" onClick={openDrawer}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Link to="/" className="logo">
        <p>C</p>
      </Link>

      <nav className="nav-list">
        <NavLink
          to="/"
          exact
          className="nav-list-item"
          activeClassName="navlink-active"
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          exact
          className="nav-list-item"
          activeClassName="navlink-active"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/portfolio"
          exact
          className="nav-list-item"
          activeClassName="navlink-active"
        >
          PORTFOLIO
        </NavLink>
        {/* <NavLink
          to="resume"
          exact
          className="nav-list-item__resume"
          activeClassName="navlink-items"
        >
          RESUME
        </NavLink> */}
        <a
          href="https://drive.google.com/file/d/17Z4TSH8Ucnw-J1hpq-Y-UPzffLsuMXpi/view"
          className="nav-list-item__resume"
          target="_blank"
        >
          RESUME
        </a>
      </nav>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

      {drawerIsOpen && (
        <SideDrawer onClick={closeDrawer}>
          <nav className="nav-list-drawer">
            <NavLink
              to="/"
              exact
              className="nav-list-item-drawer"
              activeClassName="navlink-active"
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              exact
              className="nav-list-item-drawer"
              activeClassName="navlink-active"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/portfolio"
              exact
              className="nav-list-item-drawer"
              activeClassName="navlink-active"
            >
              PORTFOLIO
            </NavLink>
            {/* <NavLink
              // to="/resume"
              exact
              className="nav-list-item__resume-drawer"
              activeClassName="navlink-items"
            >
              RESUME
            </NavLink> */}
            <a
              href="https://drive.google.com/file/d/17Z4TSH8Ucnw-J1hpq-Y-UPzffLsuMXpi/view"
              className="nav-list-item__resume-drawer"
              target="_blank"
            >
              RESUME
            </a>
          </nav>
        </SideDrawer>
      )}
    </div>
  );
};

export default Nav;
