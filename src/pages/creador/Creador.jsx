import Navbar from "../../components/navbar/Navbar";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";
import Footer from "../../components/footer/Footer";
import noland from "../../img/noland.jpeg";
import mientrastanto from "../../img/mientras-tanto.jpeg";
import MyL from "../../img/MYL3.jpeg";
import solojuntos from "../../img/solo-juntos.jpeg";
import "./Creador.css";

const Creador = () => {
  return (
    <div style={{ backgroundColor: "#171517", width: "100%", overflowX: 'hidden' }}>
      <Navbar />
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://www.youtube.com/watch?v=Gy-dify_Fqo" />
      </div>
      <h3 className="creator-title">Movimiento Lúcido</h3>
      <div className="noland-container">
        <img className="creator-noland" src={noland} alt="" />
      </div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://www.youtube.com/watch?v=wHSxI47I1fU" />
      </div>
      <h3 className="creator-title">Mientras tanto</h3>
      <div className="noland-container">
        <img className="creator-noland" src={mientrastanto} alt="" />
      </div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://www.youtube.com/watch?v=bphJLHzqGoo" />
      </div>
      <h3 className="creator-title">MyL</h3>
      <div className="noland-container">
        <img className="creator-noland" src={MyL} alt="" />
      </div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://www.youtube.com/watch?v=yL-qo8MW44k" />
      </div>
      <h3 className="creator-title">Solo Juntos</h3>
      <div className="noland-container">
        <img className="creator-noland" src={solojuntos} alt="" />
      </div>
      <WhappBtn />
      <Footer />
    </div>
  );
};

export default Creador;
