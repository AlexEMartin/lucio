import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <img className="nav_logo" src={logo} alt="" />
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/">Inicio</Link>
        <Link to="/agenda">Agenda</Link>
        <Link to="/bio">Bio</Link>
        <Link to="/creador">Creador</Link>
        <Link to="/maestro">Maestro</Link>
        <Link to="/actor">Actor</Link>
        <Link to="/trabajos">Trabajos</Link>
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
