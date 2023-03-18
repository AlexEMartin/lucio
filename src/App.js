import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/inicio/Home";
import Schedule from "./pages/agenda/Schedule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Schedule />} />
    </Routes>
  );
}

export default App;
