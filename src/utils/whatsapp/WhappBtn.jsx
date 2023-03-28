import whatsapp from "../../img/whatsapp.png";
import "./WhappBtn.css";

const WhappBtn = () => {
  return (
    <div className="container-whatsapp">
      <a
        href="https://wa.link/qpfw0e"
        target="_blank"
        rel="noreferrer"
      >
        <img className="logo-whatsapp" src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhappBtn;
