import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/finalPrince.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import throttle from "lodash/throttle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [initialWidth, setInitialWidth] = useState(null);
  const pdfWrapper = useRef();

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(setPdfSize, 3000));
    setPdfSize();
    return () => {
      window.removeEventListener("resize", throttle(setPdfSize, 3000));
    };
  }, []);

  return (
    <div>
      <Container fluid className="project-section">
        <h1 className="project-heading">
          <strong>Resume </strong>
        </h1>
        <Row>
          <div
            id="row"
            style={{
              marginTop: "10px",
              height: "50vh",
              display: "flex",
              overflow: "scroll",
            }}
            className="myresume"
          >
            <div
              id="pdfWrapper"
              style={{ width: "70vw", margin: "auto" }}
              ref={pdfWrapper}
            >
              <Document file={pdf} noData="" loading="">
                <Page pageNumber={1} loading="" width={initialWidth} />
              </Document>
            </div>
          </div>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginTop: "40px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
