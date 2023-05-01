import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Bio.css";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Footer from "../../components/footer/Footer";
import profile from "../../img/bio.jpeg";
import profile2 from "../../img/MyL2.jpg";
import { bioIntro } from "../../utils/biography/intro";
import Iframe from "../../components/iframes/Iframe";

const Bio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <div className="bio-container">
        <h1 className="bio-title">Lucio A. Baglivo</h1>
        <img
          style={{ marginTop: "50px" }}
          className="bio-img"
          src={profile}
          data-aos="fade-right"
          alt="img_profile"
        />
        <Iframe url="https://youtu.be/4CwvFiPoZYM" status={false} />
        <div className="bio-p-container">
          {bioIntro.map((i) => (
            <p key={i} data-aos="zoom-in" className="bio-p">
              {i}
            </p>
          ))}
        </div>
        <img
          className="bio-img"
          src={profile2}
          data-aos="fade-right"
          alt="img_profile"
        />
      </div>
      <WhappBtn />
      <Footer />
    </>
  );
};

export default Bio;
