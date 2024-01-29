import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PDFViewerProps = {
    pdfURL: string;
  };

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfURL }) => {
  return (
    <div>
      <Document
        file={pdfURL}
        onLoadError={console.error}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
