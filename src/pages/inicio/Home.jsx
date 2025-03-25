import { useContext, useEffect } from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Iframe from "../..//components/iframes/Iframe";
import Intro from "../../components/text/Intro";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import MyL from "../../img/MyL.jpg";
import { LanguageContext } from "../../context/LanguageContext.jsx";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const { language } = useContext(LanguageContext);
  

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {language ? (
        <Iframe
          url="https://www.youtube.com/watch?v=QAgiZ2V8noA"
          status={true}
        />
      ) : (
        <Iframe
          url="https://www.youtube.com/watch?v=rgZSYXCK5cs"
          status={true}
        />
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
