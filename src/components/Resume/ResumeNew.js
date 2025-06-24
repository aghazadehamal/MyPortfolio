import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import pdf1 from "../../Assets/cvAmalSecond.pdf";
import pdf2 from "../../Assets/cvEnglish.pdf";
import pdf3 from "../../Assets/cvFullStack.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  
  const scale = width > 786 ? 1.4 : 0.6;

  return (
    <Container fluid className="resume-section">
      <Row className="resume" style={{ justifyContent: "center", gap: "40px" }}>
        {/* Birinci CV */}
        <Col md={6} sm={12} style={{ textAlign: "center" }}>
          <Document file={pdf3}>
            <Page pageNumber={1} scale={scale} />
          </Document>
          <Button
            variant="secondary"
            href={pdf2}
            target="_blank"
            className="download-button"
            style={{ marginTop: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV 
          </Button>
        </Col>

        
        <Col md={6} sm={12} style={{ textAlign: "center" }}>
          <Document file={pdf1}>
            <Page pageNumber={1} scale={scale} />
          </Document>
          <Button
            variant="primary"
            href={pdf1}
            target="_blank"
            className="download-button"
            style={{ marginTop: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV 
          </Button>
        </Col>

        {/* İkinci CV */}
        <Col md={6} sm={12} style={{ textAlign: "center" }}>
          <Document file={pdf2}>
            <Page pageNumber={1} scale={scale} />
          </Document>
          <Button
            variant="secondary"
            href={pdf2}
            target="_blank"
            className="download-button"
            style={{ marginTop: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV 
          </Button>
        </Col>

         
      </Row>
    </Container>
  );
}

export default ResumeNew;
