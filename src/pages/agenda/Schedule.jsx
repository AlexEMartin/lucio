import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import "./Schedule.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import agenda from "../../img/agenda.jpeg";
import { months } from "../../utils/months";
import { agendas } from "../../utils/month-data";

const Schedule = () => {
  const [mes, setMes] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const sumaMes = () => {
    if (mes >= 0 && mes < 11) {
      setMes(mes + 1);
    }
    if (mes === 11) {
      setMes(0);
    }
  };

  const restaMes = () => {
    if (mes >= 1) {
      setMes(mes - 1);
    }
    if (mes === 0) {
      setMes(11);
    }
  };

  return (
    <div>
      <Navbar />
      <img data-aos="fade-right" className="img" src={agenda} alt="" />
      <h2 className="schedule">Agenda</h2>
      <div className="months">
        <ChevronLeftIcon onClick={restaMes} className="arrow left" />
        <h3 className="month">{months[mes]}</h3>
        <ChevronRightIcon onClick={sumaMes} className="arrow right" />
      </div>
      <div data-aos="zoom-in" className="info-container">
        <div className="info">{agendas[mes]}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;