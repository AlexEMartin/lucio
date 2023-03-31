import Navbar from "../../components/navbar/Navbar";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";
import Footer from "../../components/footer/Footer";
import noland from "../../img/noland.jpeg";
import "./Creador.css";

const Creador = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://www.youtube.com/watch?v=Gy-dify_Fqo" />
      </div>
      <div className="noland-container">
        <img className="creator-noland" src={noland} alt="" />
      </div>
      <WhappBtn />
      <Footer />
    </>
  );
};

export default Creador;
