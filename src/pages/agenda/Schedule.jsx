import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import "./Schedule.css";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import agenda from "../../img/agenda.jpeg";
import { months } from "../../utils/schedule/months";
import { agendas } from "../../utils/schedule/month-data";
import { events } from "../../utils/schedule/past-events";

const Schedule = () => {
  // el valor por defecto del hook useState renderiza por defecto el mes de la agenda al ingresar
  const [mes, setMes] = useState(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1400 });
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
      <div className="img-schedule-container">
        <img
          data-aos="fade-right"
          className="img-schedule"
          src={agenda}
          alt=""
        />
      </div>
      <h2 className="schedule">Agenda</h2>
      <div className="months">
        <ChevronLeftIcon onClick={restaMes} className="arrow left" />
        <h3 className="month">{months[mes]}</h3>
        <ChevronRightIcon onClick={sumaMes} className="arrow right" />
      </div>
      <div data-aos="zoom-in" className="info-container">
        <div className="info">{agendas[mes]}</div>
      </div>
      {events.map((e) => (
        <div key={e.year} className="events">
          <h1>{e.year}</h1>
          {e.months.map((m) => (
            <div key={m.month} className="eventItems">
              <h2>{m.month}</h2>
              {m.activities.map((a) => (
                <div key={a.event}>
                  <p>{a.event}</p>
                  <span>{a.place}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <Footer />
      <WhappBtn />
    </div>
  );
};

export default Schedule;
