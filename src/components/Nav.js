import "../styles.css";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { RiUserSmileLine } from "react-icons/ri";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header>
      <p className="job-role">full-stack developer</p>
      <p className="logo">
        <RiUserSmileLine size={100} className="smile-icon" />
        andrew luna
      </p>
      <nav>
        {/* <div className="hamburger " onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#000", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#000", width: "40px", height: "40px" }} />
          )}
        </div> */}
        {/* <ul className={`menuNav nav-ul ${navbarOpen ? " showMenu" : ""}`}>
          <li className="nav-li">
            <a className="navbar-a" href="#home">
              Home
            </a>
          </li>
          <li className="nav-li">
            <a className="navbar-a" href="#about">
              About
            </a>
          </li>
          <li className="nav-li">
            <a className="navbar-a" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-li"></li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Nav;
