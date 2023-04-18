import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Actor.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";
import actorImg from "../../img/actor.jpg";
import actorImg2 from "../../img/actor2.jpg";
import actorImg4 from "../../img/actor4.jpg";

const Actor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="master-container">
        <h1 className="master-title">Actor</h1>
        <Iframe url="https://youtu.be/R3Gm6550Uls" status={true} />
        <div className="img-container">
          <img
            data-aos="fade-left"
            className="actor-img"
            src={actorImg}
            alt=""
          />
        </div>
        <div className="img-container">
          <img
            data-aos="fade-left"
            className="actor-img"
            src={actorImg2}
            alt=""
          />
        </div>
        <div className="img-container differentSize">
          <img
            data-aos="fade-left"
            className="actor-img"
            src={actorImg4}
            alt=""
          />
        </div>
        <Footer />
        <WhappBtn />
      </div>
    </>
  );
};

export default Actor;
