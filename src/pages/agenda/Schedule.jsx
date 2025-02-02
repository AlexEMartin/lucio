import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import "./Schedule.css";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import agenda from "../../img/agenda.jpeg";
import { meses } from "../../utils/schedule/meses";
import { months } from "../../utils/schedule/months";
// import { agendas } from "../../utils/schedule/mes-data";
// import { schedules } from "../../utils/schedule/month-data";
import { eventos } from "../../utils/schedule/eventos-pasados";
import { events } from "../../utils/schedule/past-events";

const Schedule = () => {
  // el valor por defecto del hook useState renderiza por defecto el mes de la agenda al ingresar
  const [mes, setMes] = useState(4);
  const { language } = useContext(LanguageContext);

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
      <h2 className="schedule">{language ? "Agenda" : "Schedule"}</h2>
      <div className="months">
        <ChevronLeftIcon onClick={restaMes} className="arrow left" />
        {language ? (
          <h3 className="month">{meses[mes]}</h3>
        ) : (
          <h3 className="month">{months[mes]}</h3>
        )}
        <ChevronRightIcon onClick={sumaMes} className="arrow right" />
      </div>
      <div data-aos="zoom-in" className="info-container">
        {language ? (
          <div style={{ textAlign: 'center' }} className="info">Para tener información actualizada de la agenda enviar un mail a luciobag@gmail.com</div>
        ) : (
          <div style={{ textAlign: 'center' }} className="info">For updated information please send an email to luciobag@gmail.com</div>
        )}
      </div>
      {language ? (
        <div>
          {eventos.map((e) => (
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
        </div>
      ) : (
        <div>
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
        </div>
      )}
      <Footer />
      <WhappBtn />
    </div>
  );
};

export default Schedule;
