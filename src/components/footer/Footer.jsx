import "./Footer.css";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaVimeoV, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-media">
        <a
          href="https://www.instagram.com/lucio.a.baglivo_lab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon">
            <FaInstagram />
            <span className="footer-span">Instagram</span>
          </div>
        </a>
        <a
          href="https://vimeo.com/luciobaglivo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon">
            <FaVimeoV />
            <span className="footer-span">Vimeo</span>
          </div>
        </a>
        <a
          href="https://www.youtube.com/user/luciobag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon">
            <FaYoutube />
            <span className="footer-span">YouTube</span>
          </div>
        </a>
        <a
          href="https://www.facebook.com/luciobaglivo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon">
            <FaFacebookF />
            <span className="footer-span">Facebook</span>
          </div>
        </a>
        <a
          href="mailto:lucioabaglivo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon">
            <FiMail />
            <span className="footer-span">lucioabaglivo@gmail.com</span>
          </div>
        </a>
        <a
          href="https://wa.link/qpfw0e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="footer-icon">
            <FiPhone />
            <span className="footer-span">+34 638 496 387</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
