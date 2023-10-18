import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Document, Page, pdfjs } from "react-pdf";
import Footer from "../../components/footer/Footer";
import PDF from "./workshops.pdf";
import { BeatLoader } from "react-spinners";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdfviewer = () => {
  const { setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLanguage(false);
    if (window.innerWidth < 900) {
      setWidth(window.innerWidth);
    }
    // eslint-disable-next-line
  }, []);

  const [page, setPage] = useState(1);
  const [width, setWidth] = useState(700);

  const nextPage = () => {
    if (page === 14) {
      return page;
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page === 1) {
      return page;
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "120px",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", margin: "20px 0px 50px 0px" }}>
          <button
            style={{
              borderRadius: "4px",
              padding: "8px 14px",
              backgroundColor: "#003a39",
              color: "white",
              border: "none",
              margin: "5px",
              cursor: "pointer",
            }}
            onClick={prevPage}
          >
            Prev
          </button>
          <button
            style={{
              borderRadius: "4px",
              padding: "8px 14px",
              backgroundColor: "#003a39",
              color: "white",
              border: "none",
              margin: "5px",
              cursor: "pointer",
            }}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
        <Document file={PDF}>
          <Page
            width={width}
            loading={<BeatLoader style={{ marginTop: '500px' }} color="#36d7b7" />}
            renderTextLayer={false}
            pageNumber={page}
          />
        </Document>
      </div>
      <Footer />
    </div>
  );
};

export default Pdfviewer;
