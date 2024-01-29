
import React, {useState} from 'react';
import { Document, Page } from 'react-pdf';
import PDFViewer from './PDFViewer';

const Resume: React.FC = () => {

  return (
    
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Hello! My name is Benny Cortese. Linked here is my resume.</h1>
      <div>
        <PDFViewer pdfURL="./assets/benny_cortese_resume_dec_2023.pdf" />
      </div>
    </div>
    //download button here
  );
}

export default Resume;
