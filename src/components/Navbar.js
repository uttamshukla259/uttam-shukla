import React from "react";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero" className="ut">
          Uttam Shukla
        </a>{" "}
    
      </div>
      <div className="links1">
      <ul className="navbar-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#techstack">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
