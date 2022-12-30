import React from "react";
import { Nav } from "./layoutStyles/NavStyle";
import { Link } from "react-router-dom";
import { useViewPort } from "../hooks/Viewport";
import Logo from "./Logo.js";

const Navbar = ({ handleMenu, menuShow, active, setActiveClass }) => {
  const { width } = useViewPort();
  const breakpoint = 1070;

  return (
    <Nav>
      <div className="nav-wrapper">
        <Link to="/" className="nav-heading" title="Otutu Chinedu Kingsley">
          <Logo/>
        </Link>
        {width > breakpoint ? (
          <ul className="navigation">
            <li onClick={() => setActiveClass(1)}>
              <Link
                to="/"
                className={`nav-link ${active === 1 ? "active" : "inactive"}`}
              >
                Home
              </Link>
            </li>
            <li onClick={() => setActiveClass(2)}>
              <Link
                to="/about"
                className={`nav-link ${active === 2 ? "active" : "inactive"}`}
              >
                About
              </Link>
            </li>
            <li onClick={() => setActiveClass(3)}>
              <Link
                to="/projects"
                className={`nav-link ${active === 3 ? "active" : "inactive"}`}
              >
                Portfolio
              </Link>
            </li>
            <li onClick={() => setActiveClass(4)}>
              <Link
                to="/contact"
                className={`nav-link ${active === 4 ? "active" : "inactive"}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        ) : (
          <button className="hamburger-btn" onClick={() => handleMenu()}>
            <img
              src={
                menuShow
                  ? "/images/icon-close.svg"
                  : "/images/icon-hamburger.svg"
              }
              alt="X"
            />
          </button>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
