import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "../../context/LanguageContext";
import "./Intro.css";
import { HeartIcon } from "@heroicons/react/24/outline";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const { language } = useContext(LanguageContext);

  return (
    <div className="intro-container">
      {language ? (
        <p className="intro">
          Transmitir <strong className="bold">emociones</strong> a través de la
          {"  "}
          <strong className="bold">danza</strong>, la{" "}
          <strong className="bold">acrobacia</strong> y el{" "}
          <strong className="bold">teatro</strong>
        </p>
      ) : (
        <p className="intro">
          Transmit <strong className="bold">emotions</strong> through
          {"  "}
          <strong className="bold">dance</strong>, {"  "}
          <strong className="bold">acrobatics</strong> and{"  "}
          <strong className="bold">theater</strong>
        </p>
      )}
      <div className="hr">
        <div className="hr-block"></div>
        <HeartIcon className="heart" />
        <div className="hr-block"></div>
      </div>
      <div data-aos="zoom-in" className="intro-p-container">
        {language ? (
          <p className="intro-p">
            (…) «Lucio me ha demostrado su talento, profesionalidad y su
            sensibilidad realizando cada trabajo. La combinación de sus
            habilidades como acróbata, bailarin y actor le ha permitido
            desarrollar un lenguaje artístico único» (…) Robert Wilson,
            dramaturgo y director.
          </p>
        ) : (
          <p className="intro-p">
            (…) “Lucio has demonstrated to me his talent, professionalism, and
            his sensibility in making work, as well as his openness towards
            collaboration. The combination of his skills as an acrobat, dancer,
            and actor has allowed him to develop a unique artistic language” (…)
            Robert Wilson, playwright and director.
          </p>
        )}
        {language ? (
          <p className="intro-p">
            El objetivo de mis creaciones es lograr un trabajo escénico que, a
            través de la danza, la acrobacia y el teatro transmita emociones y
            conecte con el espectador, potenciando todos los sentidos en escena.
            En cada proyecto busco un lenguaje de movimiento propio y una
            poética escénica particular.
          </p>
        ) : (
          <p className="intro-p">
            The goal of my projects is to transmit emotions and connect with the
            audience through dance, acrobatics and theater, strengthening all
            senses. Each project has its own language of movement and particular
            stage poetry.
          </p>
        )}
      </div>
    </div>
  );
};

export default Intro;
