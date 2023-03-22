import React from "react";
import "./Footer.css";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-data">
          <div className="block">
            <h2 className="title">Redes Sociales</h2>
            <div className="media-box">
              <SlSocialInstagram className="logo" />
              <FaFacebookSquare className="logo" />
              <FiYoutube className="logo" />
            </div>
          </div>
          <div className="block">
            <h2 style={{ marginTop: "45px" }} className="title">
              Contacto
            </h2>
            <p className="phone">
              <span style={{ color: "#888888" }}>+34 638 496 387</span>
              <span style={{ color: "#c5c5c5" }}>luciobag@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
