import React from "react";
import "./Acompaniamientos.css";
import Navbar from "../../components/navbar/Navbar";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Acompaniamientos = () => {
  return (
    <>
      <Navbar />
      <div className="colab-container">
        <h1 className="colab-title">
          Trabajos realizados para otras compañías
        </h1>
        <div className="colab-cards">
          <div className="colab-block">
            <div className="colab-desc">
              <h3 className="colab-subtitle">Cia Dikothomia</h3>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>Espectaculo Spazi.o</span>
              <span>País Vasco / España</span>
              <span>
                <i>Mirada externa</i>
              </span>
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
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <h3 className="colab-subtitle">Irene de Paz</h3>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>La Madeja</span>
              <span>Almería / España</span>
              <span>
                <i>Asistencia de dirección y coreografía</i>
              </span>
            </div>
          </div>
          <div className="colab-block">
            <div className="colab-desc">
              <a
                href="https://www.youtube.com/watch?v=CABaZiQgCxQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="colab-subtitle">Maximiliano Sanford Monte</h3>
              </a>
              <ArrowLongRightIcon className="right-arrow" />
            </div>
            <div className="colab-spans">
              <span>Al Borde</span>
              <span>Madrid / España</span>
              <span>
                <i>Mirada externa</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acompaniamientos;
