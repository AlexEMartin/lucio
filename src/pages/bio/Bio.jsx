import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Bio.css";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Footer from "../../components/footer/Footer";
import profile from "../../img/bio.jpeg";
import profile2 from "../../img/MyL2.jpg";
import { bioIntro } from "../../utils/biography/intro";
import { bioEnglishIntro } from "../../utils/biography/englishIntro";
import Iframe from "../../components/iframes/Iframe";

const Bio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="bio-container">
        <h1 style={{ marginBottom: "-50px" }} className="bio-title">
          Lucio A. Baglivo
        </h1>
        <Iframe url="https://youtu.be/4CwvFiPoZYM" status={false} />
        {language ? (
          <div className="bio-p-container">
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[0]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[1]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[2]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[3]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[4]}
            </p>
          </div>
        ) : (
          <div className="bio-p-container">
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[0]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[1]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[2]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[3]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[4]}
            </p>
          </div>
        )}
        <img
          className="bio-img"
          src={profile}
          data-aos="fade-right"
          alt="img_profile"
        />
        {language ? (
          <div className="bio-p-container">
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[5]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[6]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[7]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[8]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioIntro[9]}
            </p>
          </div>
        ) : (
          <div className="bio-p-container">
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[5]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[6]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[7]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[8]}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {bioEnglishIntro[9]}
            </p>
          </div>
        )}
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
