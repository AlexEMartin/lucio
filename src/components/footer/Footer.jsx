import React from "react";
import "./Footer.css";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.jpg";
import youtube from "../../img/youtube.jpg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-data">
          <div className="block">
            <h2 className="title">Social Media</h2>
            <div className="media-box">
              <img className="logo" src={facebook} alt="" />
              <img className="logo" src={instagram} alt="" />
              <img className="logo" src={youtube} alt="" />
            </div>
          </div>
          <div className="block">
            <h2 className="title">Contacto</h2>
            <p className="phone">
              <span style={{ color: "#888888" }}>+34 638 496 387</span>
              <span style={{ color: "#c5c5c5" }}>
                luciobag@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
