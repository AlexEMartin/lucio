import whatsapp from "../../img/whatsapp.png";
import "./WhappBtn.css";

const WhappBtn = () => {
  return (
    <div className="container">
      <a
        href="https://wa.me/34638496387?text=Hola,%20%C2%BFpuede%20decirme%20m%C3%A1s%20sobre%20vuestros%20servicios?"
        target="_blank"
        rel="noreferrer"
      >
        <img className="logo" src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhappBtn;
