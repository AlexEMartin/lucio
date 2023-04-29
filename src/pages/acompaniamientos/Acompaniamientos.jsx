import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Acompaniamientos.css";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import acompanamientoImg from "../../img/acompanamiento.jpg";
import acompanamientoImg2 from "../../img/acompanamiento2.jpg";
import acompanamientoImg3 from "../../img/acompanamiento3.jpg";
import irenepaz from "../../img/irenepaz.jpg";
import irakurriz from "../../img/irakurriz.jpg";
import iam from "../../img/iam.png";
import spazio from "../../img/spazio.png";

const Acompaniamientos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");

  return (
    <>
      {modal && (
        <div className="img-modal">
          <div data-aos="zoom-in" className="img-modal-container">
            <XMarkIcon className="cross" onClick={() => setModal(!modal)} />
            <img className="img-insidemodalcontainer" src={img} alt="" />
          </div>
        </div>
      )}
      <div className="colab-container">
        <h1 className="colab-title">
          Trabajos realizados para otras compañías
        </h1>
        <h4 data-aos="fade-right" style={{ width: "75%", color: "#003a39" }}>
          A la vez que trabajo como maestro impartiendo mi propia metodología
          "Movimiento Lúcido" y dirigiendo mis propias creaciones, también
          trabajo como director y coreografo para distintas Compañías de circo,
          teatro y danza.
        </h4>
        <div className="colab-cards">
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="https://vimeo.com/122541933"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Cia Dikothomia</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>(2015)</span>
              <span>Espectaculo Spazi.o</span>
              <span>País Vasco - España</span>
              <span>
                <i>Mirada externa</i>
              </span>
              <img
                onClick={() => {
                  setImg(spazio);
                  setModal(!modal);
                }}
                style={{ width: "100%", cursor: "pointer", marginTop: "20px" }}
                src={spazio}
                alt=""
              />
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="https://www.grandegiro.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Compañia Grande Giro</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>Espectáculo I AM</span>
              <span>Suiza y Alemania</span>
              <span>
                <i>Coreografia y mirada externa</i>
              </span>
              <img
                onClick={() => {
                  setImg(iam);
                  setModal(!modal);
                }}
                style={{ width: "100%", cursor: "pointer", marginTop: "20px" }}
                src={iam}
                alt=""
              />
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="http://www.shaktiolaizola.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Cia Shakti Olaizola</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>Espectaculo Irakurriz</span>
              <span>País Vasco / España</span>
              <span>
                <i>Dirección</i>
              </span>
              <img
                onClick={() => {
                  setImg(irakurriz);
                  setModal(!modal);
                }}
                style={{ width: "100%", cursor: "pointer", marginTop: "20px" }}
                src={irakurriz}
                alt=""
              />
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="https://irenedepaz.wixsite.com/irenedepaz/la-madeja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Irene de Paz</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>(2017)</span>
              <a
                style={{ color: "#003a39" }}
                href="https://www.youtube.com/watch?v=Sd_IQBKALDk"
                target="_blank"
                rel="noopener noreferrer"
              >
                La Madeja
              </a>
              <span>Almería - España</span>
              <span>
                <i>Asistencia de dirección y coreografía</i>
              </span>
              <img
                onClick={() => {
                  setImg(irenepaz);
                  setModal(!modal);
                }}
                style={{ width: "100%", cursor: "pointer", marginTop: "20px" }}
                src={irenepaz}
                alt=""
              />
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="https://youtu.be/e7obdaxnqG4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Maximiliano Sanford Monte</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>(2018)</span>
              <span>Al Borde</span>
              <span>Madrid - España</span>
              <span>
                <i>Mirada externa</i>
              </span>
              <img
                onClick={() => {
                  setImg(acompanamientoImg2);
                  setModal(!modal);
                }}
                style={{ width: "100%", cursor: "pointer", marginTop: "20px" }}
                src={acompanamientoImg2}
                alt=""
              />
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <a
                style={{ width: "220px" }}
                href="https://youtu.be/scGIgmQJnrw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">
                  Maximiliano Sanford y Yeinner Chicas
                </h3>
              </a>
              <ArrowLongRightIcon
                style={{ marginBottom: "25px" }}
                className="right-arrow"
              />
            </div>
            <div className="colab-spans">
              <span>(2021)</span>
              <span>Vientre</span>
              <span>Madrid - España</span>
              <span>
                <i>Mirada externa</i>
              </span>
              <img
                onClick={() => {
                  setImg(acompanamientoImg);
                  setModal(!modal);
                }}
                style={{ width: "100%", cursor: "pointer", marginTop: "20px" }}
                src={acompanamientoImg}
                alt=""
              />
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="https://duktocompany.wixsite.com/dukto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Cia Dukto</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>(2023)</span>
              <a
                style={{ color: "#003a39" }}
                href="https://www.instagram.com/reel/CoXW7m8gTuI/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>A Rienda suelta</span>
              </a>
              <span>Madrid - España</span>
              <span>
                <i>Dirección</i>
              </span>
              <img
                onClick={() => {
                  setImg(acompanamientoImg3);
                  setModal(!modal);
                }}
                style={{ width: "100%", cursor: "pointer", marginTop: "20px" }}
                src={acompanamientoImg3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <WhappBtn />
      <Footer />
    </>
  );
};

export default Acompaniamientos;
