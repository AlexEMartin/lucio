import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/inicio/Home";
import Schedule from "./pages/agenda/Schedule";
import Bio from "./pages/bio/Bio";
import Creador from "./pages/creador/Creador";
import Maestro from "./pages/maestro/Maestro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Schedule />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/creador" element={<Creador />} />
      <Route path="/maestro" element={<Maestro />} />
    </Routes>
  );
}

export default App;
