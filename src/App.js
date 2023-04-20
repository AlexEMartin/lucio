import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/inicio/Home";
import Schedule from "./pages/agenda/Schedule";
import Bio from "./pages/bio/Bio";
import Creador from "./pages/creador/Creador";
import Maestro from "./pages/maestro/Maestro";
import Actor from "./pages/actor/Actor";
import Acompaniamientos from "./pages/acompaniamientos/Acompaniamientos";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Schedule />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/creador" element={<Creador />} />
        <Route path="/maestro" element={<Maestro />} />
        <Route path="/actor" element={<Actor />} />
        <Route path="/acompanamientos" element={<Acompaniamientos />} />
      </Routes>
    </Router>
  );
}

export default App;
