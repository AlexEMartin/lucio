import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useEffect } from "react";
import './Home.css';
import Footer from "../../components/footer/Footer";
import Iframe from "../..//components/iframes/Iframe";
import Intro from "../../components/text/Intro";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import MyL from "../../img/MyL.jpg";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useContext(LanguageContext);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {language ? (
        <Iframe url="https://youtu.be/ILK1tGnPpUo" status={true} />
      ) : (
        <Iframe url="https://youtu.be/LV3Tufp8uB0" status={true} />
      )}
      <Intro />
      <div
        style={{
          marginTop: "50px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img className="home-img" src={MyL} alt="" />
      </div>
      <Footer />
      <WhappBtn />
    </div>
  );
}

export default Home;
