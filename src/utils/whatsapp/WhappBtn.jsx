import whatsapp from "../../img/whatsapp.png";
import "./WhappBtn.css";

const WhappBtn = () => {
  return (
    <div className="container">
      <a
        href="https://wa.link/z8xlez"
        target="_blank"
        rel="noreferrer"
      >
        <img className="logo" src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhappBtn;
