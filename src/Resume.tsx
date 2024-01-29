
import React, {useState} from 'react';
import { Document, Page } from 'react-pdf';

const Resume: React.FC = () => {
    const pdfURL = 'path_to_pdf_file.pdf'; // need to add a link to my resume pdf here
    const [currentImage, setCurrentImage] = useState<string>(); // Default to the first image

  return (
    
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Hello! My name is Benny Cortese. Linked here is my resume.</h1>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
        </Document>
    </div>
    //download button here
  );
}

export default Resume;
