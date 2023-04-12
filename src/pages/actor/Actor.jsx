import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";
import actorImg from "../../img/actor.jpg";
import actorImg2 from "../../img/actor2.jpg";

const Actor = () => {
  return (
    <>
      <Navbar />
      <div className="master-container">
        <h1 className="master-title">Actor</h1>
        <Iframe url="https://youtu.be/R3Gm6550Uls" status={true} />
        <img className="master-img" src={actorImg} alt="" />
        <img
          style={{ marginTop: "100px" }}
          className="master-img"
          src={actorImg2}
          alt=""
        />
        <Footer />
        <WhappBtn />
      </div>
    </>
  );
};

export default Actor;
