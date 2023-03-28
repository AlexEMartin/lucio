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
            <div>
              <a
                href="https://www.instagram.com/lucio.a.baglivo_lab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialInstagram
                  style={{ width: "30px", color: "#718a8a" }}
                  className="logo"
                />
              </a>
              <a
                href="https://www.facebook.com/luciobaglivo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare
                  style={{ width: "30px", color: "#718a8a" }}
                  className="logo"
                />
              </a>
              <a
                href="https://www.youtube.com/user/luciobag"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube
                  style={{ width: "35px", color: "#718a8a" }}
                  className="logo"
                />
              </a>
            </div>
          </div>
          <div className="block">
            <h2 className="title">Contacto</h2>
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
