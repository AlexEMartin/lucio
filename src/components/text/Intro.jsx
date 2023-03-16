import React from "react";
import "./Intro.css";
import { HeartIcon } from "@heroicons/react/24/outline";

const Intro = () => {
  return (
    <div className="intro-container">
      <p className="intro">
        Transmitir <strong className="bold">emociones</strong> a través de la
        {"  "}
        <strong className="bold">danza</strong>, la{"  "}
        <strong className="bold">acrobacia</strong> y el{"  "}
        <strong className="bold">teatro</strong>
      </p>
      <div className="hr">
        <div className="hr-block"></div>
        <HeartIcon className="heart" />
        <div className="hr-block"></div>
      </div>
      <p style={{ marginTop: "20px", width: "90%" }}>
        (…) «Lucio me ha demostrado su talento, profesionaidad y su sensibilidad
        realizando cada trabajo. La combinación de sus habilidades como
        acróbata, bailarin y actor le ha permitido desarrollar un lenguaje
        artístico único» (…) Robert Wilson, dramaturgo y director.
      </p>
      <p style={{ marginTop: "30px", width: "90%" }}>
        El objetivo de sus obras es lograr un trabajo escénico que, a través de
        la danza, la acrobacia y el teatro transmita emociones y conecte con el
        espectador, potenciando todos los sentidos en escena. Cada proyecto
        busca un lenguaje de movimiento propio y una poética escénica
        particular.
      </p>
    </div>
  );
};

export default Intro;
