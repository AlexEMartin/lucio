import React from "react";
import "./Footer.css";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.jpg";
import youtube from "../../img/youtube.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="media-box">
        <img className="social" src={facebook} alt="" />
        <img className="social" src={instagram} alt="" />
        <img className="social" src={youtube} alt="" />
      </div>
      <p className="phone">
        <span style={{ color: "#888888", marginRight: '30px' }}>+34 638 496 387</span>
        <span style={{ color: "#c5c5c5" }}>luciobag@gmail.com</span>{" "}
      </p>
    </div>
  );
};

export default Footer;
