import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Bio.css";
import Navbar from "../../components/navbar/Navbar";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Footer from "../../components/footer/Footer";
import profile2 from "../../img/MyL2.jpg";
import { bioIntro } from "../../utils/biography/intro";
import { recentProjects } from "../../utils/biography/recentProjects";
import Iframe from "../../components/iframes/Iframe";

const Bio = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bio-container">
        <h1 style={{ marginBottom: '-40px' }} className="bio-title">Lucio A. Baglivo</h1>
        <Iframe url="https://youtu.be/4CwvFiPoZYM" status={true} />
        {bioIntro.map((i) => (
          <div className="bio-p-container" key={i}>
            <p data-aos="zoom-in" className="bio-p">
              {i}
            </p>
          </div>
        ))}
        <img
          className="bio-img"
          src={profile2}
          data-aos="fade-right"
          alt="img_profile"
        />
        <h2 style={{ color: "#718a8a", marginTop: '50px' }}>PROYECTOS MÁS RECIENTES</h2>
        {recentProjects.map((i) => (
          <div className="bio-p-container" key={i}>
            <p data-aos="zoom-in" className="bio-p">
              {i}
            </p>
          </div>
        ))}
      </div>
      <WhappBtn />
      <Footer />
    </>
  );
};

export default Bio;
