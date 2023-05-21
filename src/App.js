import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Home from "./pages/inicio/Home";
import Error404 from "./pages/error/Error404";
import Navbar from "./components/navbar/Navbar";
import LanguageProvider from "./context/LanguageContext";

const Acompaniamientos = lazy(() =>
  import("./pages/acompaniamientos/Acompaniamientos")
);
const Actor = lazy(() => import("./pages/actor/Actor"));
const Bio = lazy(() => import("./pages/bio/Bio"));
const Creador = lazy(() => import("./pages/creador/Creador"));
const Maestro = lazy(() => import("./pages/maestro/Maestro"));
const Pdfviewer = lazy(() => import("./utils/master/Pdf"));
const Schedule = lazy(() => import("./pages/agenda/Schedule"));

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/agenda"
            element={
              <Suspense fallback={<BeatLoader color="#36d7b7" />}>
                <Schedule />
              </Suspense>
            }
          />
          <Route
            path="/bio"
            element={
              <Suspense fallback={<BeatLoader color="#36d7b7" />}>
                <Bio />
              </Suspense>
            }
          />
          <Route
            path="/creador"
            element={
              <Suspense fallback={<BeatLoader color="#36d7b7" />}>
                <Creador />
              </Suspense>
            }
          />
          <Route
            path="/maestro"
            element={
              <Suspense fallback={<BeatLoader color="#36d7b7" />}>
                <Maestro />
              </Suspense>
            }
          />
          <Route
            path="/actor"
            element={
              <Suspense fallback={<BeatLoader color="#36d7b7" />}>
                <Actor />
              </Suspense>
            }
          />
          <Route
            path="/acompanamientos"
            element={
              <Suspense fallback={<BeatLoader color="#36d7b7" />}>
                <Acompaniamientos />
              </Suspense>
            }
          />
          <Route
            path="/pdf"
            element={
              <Suspense fallback={<BeatLoader color="#36d7b7" />}>
                <Pdfviewer />
              </Suspense>
            }
          />
          <Route path="/not_found" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/not_found" />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
