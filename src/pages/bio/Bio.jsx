import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Bio.css";
import Navbar from "../../components/navbar/Navbar";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Footer from "../../components/footer/Footer";
import profile from "../../img/profile.jpg";
import profile2 from "../../img/MyL2.jpg";
import { bioIntro } from "../../utils/biography/intro";
import { recentProjects } from "../../utils/biography/recentProjects";

const Bio = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bio-container">
        <h1 className="bio-title">Lucio A. Baglivo</h1>
        <img
          className="bio-img"
          src={profile}
          data-aos="fade-right"
          alt="img_profile"
        />
        {bioIntro.map((i) => (
          <div className="bio-p-container" key={i}>
            <p data-aos="zoom-in" className="bio-p">
              {i.p1}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p2}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p3}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p4}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p5}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p6}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p7}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p8}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p9}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p10}
            </p>
          </div>
        ))}
        <img
          className="bio-img"
          src={profile2}
          data-aos="fade-right"
          alt="img_profile"
        />
        {recentProjects.map((i) => (
          <div className="bio-p-container" key={i}>
            <h2 style={{ color: "#718a8a" }}>{i.title}</h2>
            <p data-aos="zoom-in" className="bio-p">
              {i.p1}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p2}
            </p>
            <p data-aos="zoom-in" className="bio-p">
              {i.p3}
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
