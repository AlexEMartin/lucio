import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaVimeoV, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={{ width: '100%' }} className="nav-info">
        <div id="phone-mail" className="nav-info-side">
          <p>
            <FiPhone className="nav-info-icon" /> <span style={{ margin: "0px 10px" }}>+34 638 496 387</span>
          </p>
          <p>
            <FiMail className="nav-info-icon" /> <span style={{ marginLeft: "10px" }}>luciobag@gmail.com</span>
          </p>
          <p style={{ marginLeft: "20px" }}>Español</p>
        </div>
        <div
          className="nav-info-side socialmedia"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:luciobag@gmail.com"
          >
             <FiMail className="nav-info-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/luciobaglivo/"
          >
            <FaFacebookF className="nav-info-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/user/luciobag"
          >
            <FaYoutube className="nav-info-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vimeo.com/luciobaglivo"
          >
            <FaVimeoV className="nav-info-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/lucio.a.baglivo_lab/"
          >
            <FaInstagram className="nav-info-icon" />
          </a>
        </div>
      </div>
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
    </>
  );
};
export default Navbar;
