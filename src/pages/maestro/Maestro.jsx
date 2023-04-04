import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Maestro.css";
import Navbar from "../../components/navbar/Navbar";
import maestro1img from "../../img/maestro.jpeg";
import { master1 } from "../../utils/master/master";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";

const Maestro = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="master-container">
        <h1 className="master-title">Maestro</h1>
        <div className="master-block">
          <img
            data-aos="fade-right"
            className="master-img"
            src={maestro1img}
            alt=""
          />
          <div className="master-text">
            {master1.map((p) => (
              <p className="master-p" key={p.id}>
                {p.p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <WhappBtn />
      <Footer />
    </>
  );
};

export default Maestro;
