import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
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
import ara from "../../img/ara.png";
import simehacebien from "../../img/simehacebien.png";

const Acompaniamientos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");

  const { language } = useContext(LanguageContext);

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
        {language ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="colab-title">
              Trabajos realizados para otras compañías
            </h1>
            <h4
              data-aos="fade-right"
              style={{ width: "75%", color: "#003a39" }}
            >
              A la vez que trabajo como maestro impartiendo mi propia
              metodología "Movimiento Lúcido" y dirigiendo mis propias
              creaciones, también trabajo como director y coreografo para
              distintas Compañías de circo, teatro y danza.
            </h4>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="colab-title">Artistic Assessment</h1>
            <h4
              data-aos="fade-right"
              style={{ width: "75%", color: "#003a39" }}
            >
              At the same time that I work as a teacher teaching my own
              methodology "Lucid Motion" and directing my own creations, I also
              work as a director and choreographer for different circus, theater
              and dance companies.
            </h4>
          </div>
        )}
        <div className="colab-cards">
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="https://youtu.be/sE1NMqXPgo8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Andrea Ríos</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>(2023)</span>
              <a
                style={{ color: "#003a39", textDecoration: "none" }}
                href="https://www.ciaandrearios.com/ara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Ara</span>
              </a>
              <span>Madrid - España</span>
              <span>
                {language ? <i>Mirada externa</i> : <i>Artistic assessment</i>}
              </span>
              <img
                onClick={() => {
                  setImg(ara);
                  setModal(!modal);
                }}
                className="colab-img"
                src={ara}
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
                style={{ color: "#003a39", textDecoration: "none" }}
                href="https://www.instagram.com/reel/CoXW7m8gTuI/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>A Rienda suelta</span>
              </a>
              <span>Mataró - Cataluña</span>
              <span>{language ? <i>Dirección</i> : <i>Direction</i>}</span>
              <img
                onClick={() => {
                  setImg(acompanamientoImg3);
                  setModal(!modal);
                }}
                className="colab-img"
                src={acompanamientoImg3}
                alt=""
              />
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="https://malditascirco.com/si-me-hace-bien-no-puede-estar-mal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Cia Niñas Malditas</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>(2022)</span>
              {/* <a
                style={{ color: "#003a39", textDecoration: "none" }}
                href="https://www.instagram.com/reel/CoXW7m8gTuI/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <span>Si me hace bien no puede estar mal</span>
              {/* </a> */}
              <span>Madrid - España</span>
              <span>{language ? <i>Dirección</i> : <i>Direction</i>}</span>
              <img
                onClick={() => {
                  setImg(simehacebien);
                  setModal(!modal);
                }}
                className="colab-img"
                src={simehacebien}
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
                <h3 className="colab-subtitle">M.Sanford & Y.Chicas</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>(2021)</span>
              <span>Vientre</span>
              <span>Barcelona - Cataluña</span>
              <span>
                {language ? <i>Mirada externa</i> : <i>Artistic assessment</i>}
              </span>
              <img
                onClick={() => {
                  setImg(acompanamientoImg);
                  setModal(!modal);
                }}
                className="colab-img"
                src={acompanamientoImg}
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
                {language ? <i>Mirada externa</i> : <i>Artistic assessment</i>}
              </span>
              <img
                onClick={() => {
                  setImg(acompanamientoImg2);
                  setModal(!modal);
                }}
                className="colab-img"
                src={acompanamientoImg2}
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
                style={{ color: "#003a39", textDecoration: "none" }}
                href="https://www.youtube.com/watch?v=Sd_IQBKALDk"
                target="_blank"
                rel="noopener noreferrer"
              >
                La Madeja
              </a>
              <span>Almería - España</span>
              <span>
                {language ? (
                  <i>Asistencia de dirección y coreografía</i>
                ) : (
                  <i>Direction and choreography</i>
                )}
              </span>
              <img
                onClick={() => {
                  setImg(irenepaz);
                  setModal(!modal);
                }}
                className="colab-img"
                src={irenepaz}
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
              <span>(2017)</span>
              {language ? (
                <span>Espectáculo Irakurriz</span>
              ) : (
                <span>Irakurriz</span>
              )}
              <span>País Vasco / España</span>
              <span>{language ? <i>Dirección</i> : <i>Direction</i>}</span>
              <img
                onClick={() => {
                  setImg(irakurriz);
                  setModal(!modal);
                }}
                className="colab-img"
                src={irakurriz}
                alt=""
              />
            </div>
          </div>
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
              {language ? (
                <span>Espectáculo Spazi.o</span>
              ) : (
                <span>Spazi.o</span>
              )}
              <span>País Vasco - España</span>
              <span>
                {language ? <i>Mirada externa</i> : <i>Artistic assessment</i>}
              </span>
              <img
                onClick={() => {
                  setImg(spazio);
                  setModal(!modal);
                }}
                className="colab-img"
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
              <span>(2015)</span>
              {language ? <span>Espectáculo I AM</span> : <span>I AM</span>}
              <span>Suiza y Alemania</span>
              <span>
                {language ? (
                  <i>Coreografia y mirada externa</i>
                ) : (
                  <i>Choreography and artistic assessment</i>
                )}
              </span>
              <img
                onClick={() => {
                  setImg(iam);
                  setModal(!modal);
                }}
                className="colab-img"
                src={iam}
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
