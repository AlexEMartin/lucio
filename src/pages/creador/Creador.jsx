import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeartHr from "../../utils/creator/HeartHr";
import "./Creador.css";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";
import Footer from "../../components/footer/Footer";
import mientrastanto from "../../img/mientras-tanto2.jpeg";
import MyL from "../../img/MyL5.JPG";
import MyL2 from "../../img/MyL6.jpg";
import solojuntos from "../../img/solo-juntos.jpeg";
import melasbailotodas from "../../img/me-las-bailo-todas.jpeg";
import logosurge from "../../img/logo surge.png";
import apparentlyalone from "../../img/apparently-alone.png";
import iamtheother from "../../img/iamtheother.jpeg";
import noland from "../../img/noland.jpeg";
import holaquetal from "../../img/holaquetal.png";
import {
  melasbailotodasText,
  mientrasTantoText,
  apparentlyAloneText,
  iamtheotherText,
  mylText,
  myl20Text,
  solojuntosText,
  nolandText,
  holaquetalText,
  ciclonText,
} from "../../utils/creator/creatorDescriptions";

const Creador = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [video, setVideo] = useState("https://youtu.be/bphJLHzqGoo");
  const [video2, setVideo2] = useState(
    "https://www.youtube.com/watch?v=yL-qo8MW44k&t=68s"
  );
  const [video3, setVideo3] = useState("https://youtu.be/OzqhXJ5XdrM");

  // Ciclón https://youtu.be/02gNwR8UFY8

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Iframe url="https://youtu.be/ILK1tGnPpUo" status={true} />
      <h3 className="creator-title">Me las bailo todas (2022)</h3>
      {melasbailotodasText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div className="creator-container withLogo">
        <img style={{ marginBottom: "20px" }} src={logosurge} alt="" />
      </div>
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={melasbailotodas} alt="" />
      </div>
      <HeartHr />
      <Iframe url="https://youtu.be/oX3J5Bqqbk8" status={false} />
      <h3 className="creator-title">Mientras&emsp;&emsp;&emsp;tanto (2021)</h3>
      {mientrasTantoText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={mientrastanto} alt="" />
      </div>
      <HeartHr />
      <Iframe url="https://youtu.be/Fwx4prULRNU" status={false} />
      <h3 className="creator-title">Apparently alone (2020)</h3>
      {apparentlyAloneText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={apparentlyalone} alt="" />
      </div>
      <HeartHr />
      <Iframe url="https://youtu.be/EetEfWttC6w" status={false} />
      <h3 className="creator-title">I am the other (2020)</h3>
      {iamtheotherText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={iamtheother} alt="" />
      </div>
      <HeartHr />
      <Iframe url={video3} status={false} />
      <h3 className="creator-title">MyL (2019)</h3>
      <div className="creator-buttons">
        <button
          className="creator-btn"
          onClick={() => setVideo3("https://youtu.be/OzqhXJ5XdrM")}
        >
          MyL (2019)
        </button>
        <button
          className="creator-btn"
          onClick={() => setVideo3("https://youtu.be/e-A6QzOuEKY")}
        >
          MyL Grecia
        </button>
        <button
          className="creator-btn"
          onClick={() => setVideo3("https://youtu.be/h4zRKOhIHQc")}
        >
          MyL Alemania
        </button>
        <button
          className="creator-btn"
          onClick={() => setVideo3("https://youtu.be/rA02r7SF1cA")}
        >
          MyL París
        </button>
      </div>
      {mylText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={MyL} alt="" />
      </div>
      <HeartHr />
      <Iframe url={video} status={false} />
      <h3 className="creator-title">MyL (2.0)</h3>
      <div className="creator-buttons">
        <button
          className="creator-btn"
          onClick={() => setVideo("https://youtu.be/bphJLHzqGoo")}
        >
          MyL 2.0 (2019)
        </button>
        <button
          className="creator-btn"
          onClick={() => setVideo("https://youtu.be/svPEL4ab9ic")}
        >
          MyL(2.0) fragmento
        </button>
        <button
          className="creator-btn"
          onClick={() =>
            setVideo("https://www.youtube.com/watch?v=TOAwPhWMBeM")
          }
        >
          MyL(2.0) Alemania
        </button>
      </div>
      {myl20Text.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={MyL2} alt="" />
      </div>
      <HeartHr />
      <Iframe url={video2} status={false} />
      <h3 className="creator-title">Solo Juntos (2015)</h3>
      <div className="creator-buttons">
        <button
          className="creator-btn"
          onClick={() =>
            setVideo2("https://www.youtube.com/watch?v=yL-qo8MW44k&t=68s")
          }
        >
          Solo Juntos (2015)
        </button>
        <button
          className="creator-btn"
          onClick={() =>
            setVideo2("https://www.youtube.com/watch?v=r08TXK4qhpI&t=7s")
          }
        >
          Solo Juntos (Almería)
        </button>
        <button
          className="creator-btn"
          onClick={() =>
            setVideo2("https://www.youtube.com/watch?v=BdG2zphA-SU")
          }
        >
          Solo Juntos (video promo)
        </button>
      </div>
      {solojuntosText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={solojuntos} alt="" />
      </div>
      <HeartHr />
      <Iframe url="https://youtu.be/5d4mOd3xjMY" status={false} />
      <h3 className="creator-title">No land (2013)</h3>
      {nolandText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={noland} alt="" />
      </div>
      <HeartHr />
      <Iframe url="https://youtu.be/02gNwR8UFY8" status={false} />
      <h3 className="creator-title">Ciclón</h3>
      {ciclonText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <HeartHr />
      <Iframe url="https://youtu.be/UKTUgDfuE3A" status={false} />
      <h3 className="creator-title">Holaquétal! (2009)</h3>
      {holaquetalText.map((t) => (
        <p className="creator-description">{t}</p>
      ))}
      <div data-aos="flip-right" className="creator-container">
        <img className="creator-img" src={holaquetal} alt="" />
      </div>
      <WhappBtn />
      <Footer />
    </div>
  );
};

export default Creador;
