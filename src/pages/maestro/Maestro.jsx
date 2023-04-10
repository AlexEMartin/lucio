import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Maestro.css";
import Navbar from "../../components/navbar/Navbar";
import SliderMaster from "../../components/sliders/SliderMaster";
import { master1, master2 } from "../../utils/master/master";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";

const Maestro = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="master-container">
        <h1 className="master-title">Maestro</h1>
        <Iframe url="https://vimeo.com/581104691" status={true} />
        <div className="master-block">
          <div className="master-text">
            {master1.map((p) => (
              <p data-aos="zoom-in" className="master-p" key={p}>
                {p}
              </p>
            ))}
          </div>
          <SliderMaster />
          <div className="master-text">
            {master2.map((p) => (
              <p data-aos="zoom-in" className="master-p" key={p}>
                {p}
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
