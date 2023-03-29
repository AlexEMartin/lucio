import Navbar from "../../components/navbar/Navbar";
import WhappBtn from "../../utils/whatsapp/WhappBtn";
import Iframe from "../../components/iframes/Iframe";

const Creador = () => {
  return (
    <>
      <Navbar />
      <Iframe url="https://www.youtube.com/watch?v=Gy-dify_Fqo" />
      <WhappBtn />
    </>
  );
};

export default Creador;
