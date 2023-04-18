import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Maestro.css";
import Navbar from "../../components/navbar/Navbar";
import MasterSlider from "../../components/sliders/MasterSlider";
import { master1, master2, master3 } from "../../utils/master/master";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";
import masterImg from "../../img/maestro.jpg";
import masterImg2 from "../../img/maestro2.jpg";
import masterImg3 from "../../img/maestro3.jpg";

const Maestro = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [shorter, setShorter] = useState(true);
  const [shorter2, setShorter2] = useState(true);
  const [shorter3, setShorter3] = useState(true);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />
      <div className="master-container">
        <h1 className="master-title">Maestro</h1>
        <Iframe url="https://vimeo.com/581104691" status={true} />
        <div className="master-block">
          <div className="master-text">
            <p data-aos="zoom-in" className="master-p">
              {shorter ? master1[0].substring(0, 450) + "..." : master1[0]}
              {shorter && (
                <button
                  className="btn-long"
                  onClick={() => setShorter(!shorter)}
                >
                  Leer más
                </button>
              )}
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
              {shorter2 ? master1[1].substring(0, 450) + "..." : master1[1]}
              {shorter2 && (
                <button
                  className="btn-long"
                  onClick={() => setShorter2(!shorter2)}
                >
                  Leer más
                </button>
              )}
            </p>
            {!shorter2 && (
              <div>
                <p data-aos="zoom-in" className="master-p">
                  {master1[2]}
                </p>
                <p data-aos="zoom-in" className="master-p">
                  {master1[3]}
                </p>
                <p data-aos="zoom-in" className="master-p">
                  {master1[4]}
                </p>
              </div>
            )}
          </div>
          <img
            data-aos="fade-left"
            className="master-img"
            src={masterImg2}
            alt=""
          />
          <div className="master-text">
            <p data-aos="zoom-in" className="master-p">
              {master1[5]}
            </p>
            <p data-aos="zoom-in" className="master-p">
              {master1[6]}
            </p>
            <p data-aos="zoom-in" className="master-p">
              {master1[7]}
            </p>
            <p data-aos="zoom-in" className="master-p">
              {master1[8]}
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="master-img"
            src={masterImg3}
            alt=""
          />
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => setShorter3(!shorter3)}
          >
            Leer detalle de las cuatro técnicas
          </h3>
          {!shorter3 && (
            <div>
              <div className="bottom-text">
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
          )}
        </div>
      </div>
      <MasterSlider />
      <WhappBtn />
      <Footer />
    </div>
  );
};

export default Maestro;
