import Navbar from "../../components/navbar/Navbar";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";
import Footer from "../../components/footer/Footer";
import noland from "../../img/noland.jpeg";
import mientrastanto from "../../img/mientras-tanto2.jpeg";
import MyL from "../../img/MyL5.JPG";
import MyL2 from "../../img/MyL6.jpg";
import solojuntos from "../../img/solo-juntos.jpeg";
import melasbailotodas from "../../img/me-las-bailo-todas.jpeg";
import { HeartIcon } from "@heroicons/react/24/outline";
import "./Creador.css";

const Creador = () => {
  return (
    <div
      style={{ backgroundColor: "#171517", width: "100%", overflowX: "hidden" }}
    >
      <Navbar />
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://youtu.be/ILK1tGnPpUo" status={true} />
      </div>
      <h3 className="creator-title">Me las bailo todas (2022)</h3>
      <div className="noland-container">
        <img className="creator-noland" src={melasbailotodas} alt="" />
      </div>
      <div style={{ marginBottom: "-50px", paddingTop: "40px" }} className="hr">
        <div className="hr-block"></div>
        <HeartIcon className="heart" />
        <div className="hr-block"></div>
      </div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://www.youtube.com/watch?v=Gy-dify_Fqo" status={false} />
      </div>
      <h3 className="creator-title">Movimiento Lúcido</h3>
      <div className="noland-container">
        <img className="creator-noland" src={noland} alt="" />
      </div>
      <div style={{ marginBottom: "-50px", paddingTop: "40px" }} className="hr">
        <div className="hr-block"></div>
        <HeartIcon className="heart" />
        <div className="hr-block"></div>
      </div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://youtu.be/oX3J5Bqqbk8" status={false} />
      </div>
      <h3 className="creator-title">Mientras&emsp;&emsp;&emsp;tanto (2021)</h3>
      <div className="noland-container">
        <img className="creator-noland" src={mientrastanto} alt="" />
      </div>
      <div style={{ marginBottom: "-50px", paddingTop: "40px" }} className="hr">
        <div className="hr-block"></div>
        <HeartIcon className="heart" />
        <div className="hr-block"></div>
      </div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://youtu.be/OzqhXJ5XdrM" status={false} />
      </div>
      <h3 className="creator-title">MyL (2019)</h3>
      <div className="noland-container">
        <img className="creator-noland" src={MyL} alt="" />
      </div>
      <div style={{ marginBottom: "-50px", paddingTop: "40px" }} className="hr">
        <div className="hr-block"></div>
        <HeartIcon className="heart" />
        <div className="hr-block"></div>
      </div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://youtu.be/bphJLHzqGoo" status={false} />
      </div>
      <h3 className="creator-title">MyL 2.0 (2019)</h3>
      <div className="noland-container">
        <img className="creator-noland" src={MyL2} alt="" />
      </div>
      <div style={{ marginBottom: "-50px", paddingTop: "40px" }} className="hr">
        <div className="hr-block"></div>
        <HeartIcon className="heart" />
        <div className="hr-block"></div>
      </div>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Iframe url="https://www.youtube.com/watch?v=yL-qo8MW44k" status={false} />
      </div>
      <h3 className="creator-title">Solo Juntos (2015)</h3>
      <div className="noland-container">
        <img className="creator-noland" src={solojuntos} alt="" />
      </div>
      <WhappBtn />
      <Footer />
    </div>
  );
};

export default Creador;
