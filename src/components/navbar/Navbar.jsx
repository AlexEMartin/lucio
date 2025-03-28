import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaVimeoV, FaInstagram } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <div className="languages">
        <button
          onClick={() => setLanguage(true)}
          className={`language-btn ${language && "lanbold"}`}
        >
          ES
        </button>
        <span>|</span>
        <button
          onClick={() => setLanguage(false)}
          className={`language-btn ${!language && "lanbold"}`}
        >
          EN
        </button>
      </div>
      <div style={{ width: "100%" }} className="nav-info">
        <div id="phone-mail" className="nav-info-side">
          <p>
            <FiPhone className="nav-info-icon" />{" "}
            <span style={{ margin: "0px 10px" }}>+34 638 496 387</span>
          </p>
          <p>
            <a
              style={{ textDecoration: "none" }}
              href="mailto:luciobag@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail
                style={{ marginBottom: "-2px" }}
                className="nav-info-icon"
              />{" "}
              <span style={{ marginLeft: "10px", color: "#003a39" }}>
                luciobag@gmail.com
              </span>
            </a>
          </p>
        </div>
        <div className="socialmedia">
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
          <Link to="/" onClick={() => setIsOpen(!isOpen)}>
            {language ? "Inicio" : "Home"}
          </Link>
          <Link to="/agenda" onClick={() => setIsOpen(!isOpen)}>
            {language ? "Agenda" : "Calendar"}
          </Link>
          <Link to="/bio" onClick={() => setIsOpen(!isOpen)}>
            Bio
          </Link>
          <Link to="/creador" onClick={() => setIsOpen(!isOpen)}>
            {language ? "Creador" : "Director"}
          </Link>
          <Link to="/maestro" onClick={() => setIsOpen(!isOpen)}>
            {language ? "Maestro" : "Teacher"}
          </Link>
          <Link to="/actor" onClick={() => setIsOpen(!isOpen)}>
            Actor
          </Link>
          <Link to="/acompanamientos" onClick={() => setIsOpen(!isOpen)}>
            {language ? "Acompañamientos artísticos" : "Artistic assessment"}
          </Link>
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
    </div>
  );
};
export default Navbar;
