import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import logo from "../assets/pizza-logo.png";

export function Navbar() {
  const [menuState, setMenuState] = useState(false);

  function toggleNavbar() {
    setMenuState(!menuState);
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={menuState ? "open" : "close"}>
        <img src={logo} alt="pizza logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => toggleNavbar()}>
          <ReorderIcon className="hamburger" />
        </button>
      </div>
    </div>
  );
}
