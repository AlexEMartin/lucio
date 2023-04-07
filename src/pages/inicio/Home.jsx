import Footer from "../../components/footer/Footer";
import Iframe from "../..//components/iframes/Iframe";
import Navbar from "../../components/navbar/Navbar";
import Intro from "../../components/text/Intro";
import Slider from "../../components/sliders/Slider";
import WhappBtn from "../../utils/whatsapp/WhappBtn";

function Home() {
  return (
    <div>
      <Navbar />
      <Iframe url="https://youtu.be/ILK1tGnPpUo" status={true} />
      <Intro />
      <Slider />
      <Footer />
      <WhappBtn />
    </div>
  );
}

export default Home;
