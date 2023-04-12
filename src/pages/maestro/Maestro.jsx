import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Maestro.css";
import Navbar from "../../components/navbar/Navbar";
import { master1, master2, master3 } from "../../utils/master/master";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";
import masterImg from "../../img/maestro.jpg";
import masterImg2 from "../../img/maestro2.jpg";
import masterImg3 from "../../img/maestro3.jpg";

const Maestro = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />
      <div className="master-container">
        <h1 className="master-title">Maestro</h1>
        <Iframe url="https://vimeo.com/581104691" status={true} />
        <div className="master-block">
          <div className="master-text">
            <p data-aos="zoom-in" className="master-p">
              {master1[0]}
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="master-img"
            src={masterImg}
            alt=""
          />
          <div className="master-text colorize">
            <p data-aos="zoom-in" className="master-p">
              {master1[1]}
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="master-img"
            src={masterImg2}
            alt=""
          />
          <div className="master-text">
            <p data-aos="zoom-in" className="master-p">
              {master1[2]}
            </p>
            <p data-aos="zoom-in" className="master-p">
              {master1[3]}
            </p>
            <p data-aos="zoom-in" className="master-p">
              {master1[4]}
            </p>
            <p data-aos="zoom-in" className="master-p">
              {master1[5]}
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="master-img"
            src={masterImg3}
            alt=""
          />
          <div className="master-text">
            {master2.map((p) => (
              <p data-aos="zoom-in" className="master-p" key={p}>
                {p}
              </p>
            ))}
          </div>
          <div className="master-text colorize">
            {master3.map((p) => (
              <p data-aos="zoom-in" className="master-p" key={p}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <WhappBtn />
      <Footer />
    </div>
  );
};

export default Maestro;
