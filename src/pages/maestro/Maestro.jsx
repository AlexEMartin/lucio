import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Maestro.css";
import MasterSlider from "../../components/sliders/MasterSlider";
import {
  master1,
  master2,
  master3,
  enmaster1,
} from "../../utils/master/master";
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

  const navigate = useNavigate();

  const { language } = useContext(LanguageContext);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {language ? (
        <h1 className="master-title">Maestro</h1>
      ) : (
        <h1 className="master-title">Teacher</h1>
      )}
      <Iframe url="https://www.youtube.com/watch?v=6Z_LKjHsIKQ" status={true} />
      <div className="master-container">
        <div className="master-block">
          <div className="master-text">
            {language ? (
              <p style={{marginTop: "-70px"}} data-aos="zoom-in" className="master-p">
                {shorter ? master1[0].substring(0, 151) + "..." : master1[0]}
                {shorter && (
                  <button
                    className="btn-long"
                    onClick={() => setShorter(!shorter)}
                  >
                    Leer más
                  </button>
                )}
              </p>
            ) : (
              <p data-aos="zoom-in" className="master-p">
                {shorter
                  ? enmaster1[0].substring(0, 124) + "..."
                  : enmaster1[0]}
                {shorter && (
                  <button
                    className="btn-long"
                    onClick={() => setShorter(!shorter)}
                  >
                    Read more
                  </button>
                )}
              </p>
            )}
          </div>
          <img
            data-aos="fade-left"
            className="master-img"
            src={masterImg}
            alt=""
          />
          {language ? (
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
          ) : (
            <div className="master-text colorize">
              <p data-aos="zoom-in" className="master-p">
                {shorter2
                  ? enmaster1[1].substring(0, 450) + "..."
                  : enmaster1[1]}
                {shorter2 && (
                  <button
                    className="btn-long"
                    onClick={() => setShorter2(!shorter2)}
                  >
                    Read more
                  </button>
                )}
              </p>
              {!shorter2 && (
                <div>
                  <p data-aos="zoom-in" className="master-p">
                    {enmaster1[2]}
                  </p>
                  <p data-aos="zoom-in" className="master-p">
                    {enmaster1[3]}
                  </p>
                  <p data-aos="zoom-in" className="master-p">
                    {enmaster1[4]}
                  </p>
                </div>
              )}
            </div>
          )}
          <img
            data-aos="fade-left"
            className="master-img"
            src={masterImg2}
            alt=""
          />
          {language ? (
            <div style={{ color: "#003a39" }} className="master-text">
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
          ) : (
            <div style={{ color: "#003a39" }} className="master-text">
              <p data-aos="zoom-in" className="master-p">
                {enmaster1[5]}
              </p>
              <p data-aos="zoom-in" className="master-p">
                {enmaster1[6]}
              </p>
              <p data-aos="zoom-in" className="master-p">
                {enmaster1[7]}
              </p>
              <p data-aos="zoom-in" className="master-p">
                {enmaster1[8]}
              </p>
            </div>
          )}
          <img
            data-aos="fade-left"
            className="master-img"
            src={masterImg3}
            alt=""
          />
          {!language && (
            <div className="master-block">
              <button onClick={() => navigate("/pdf")} className="myButton">
                More information about each workshop
              </button>
            </div>
          )}
          {language && (
            <div className="master-block">
              <button
                className="myButton"
                onClick={() => setShorter3(!shorter3)}
              >
                Leer detalle de cada taller
              </button>
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
