import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <img className="nav_logo" src={logo} alt="" />
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/">Inicio</Link>
        <Link to="/">Agenda</Link>
        <Link to="/">Bio</Link>
        <Link to="/">Director</Link>
        <Link to="/">Maestro</Link>
        <Link to="/">Actor</Link>
        <Link to="/">Trabajos</Link>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Navbar;
