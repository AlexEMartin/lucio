import Footer from "../../components/footer/Footer";
import Iframe from "../..//components/iframes/Iframe";
import Navbar from "../../components/navbar/Navbar";
import Intro from "../../components/text/Intro";
import Slider from "../../components/sliders/Slider";

function Home() {
  return (
    <div>
      <Navbar />
      <Iframe />
      <Intro />
      <Slider />
      <Footer />
    </div>
  );
}

export default Home;
