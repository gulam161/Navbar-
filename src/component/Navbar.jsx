import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMedia, setShowMedia] = useState(false);
  return (
    <>
      <nav className="main_nav">
        <div className="logo">
          <h2>
            <span>G</span>ulam
            <span>M</span>urtuza
          </h2>
        </div>
        <div className={showMedia ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {/* media-links */}
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <NavLink
                to="https://www.linkedin.com/in/murtuza-g/"
                target="blank"
              >
                <FaLinkedin className="linkedin" />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/gulam161" target="blank">
                <FaGithub className="github" />
              </NavLink>
            </li>
            <li></li>
          </ul>
          <div
            className="hamburger-menu"
            onClick={() => setShowMedia(!showMedia)}
          >
            <NavLink to="#">
              <GiHamburgerMenu />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
