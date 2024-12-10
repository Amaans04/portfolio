import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu} from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">⚙️</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a className="navele" href="/about">About</a>
            </li>
            <li>
              <a className="navele" href="/Education">Education</a>
            </li>
            <li>
              <a className="navele" href="/work">My Work</a>
            </li>
            <li>
              <a className="navele" href="/Skills">Skills</a>
            </li>
          </ul>
        </nav>
        <a href="https://wa.me/917666345870" target="_blank" className="btn hire-me">Contact Me</a>
      </header>
      <button className="menu">
        <IoMdSettings className="set" />
        <GiHamburgerMenu className="men" />
      </button>
    </>
  );
};

export default Navbar;
