import React, { useState } from 'react';

const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-start min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Hello! My name is Benny Cortese. This is my Resume!</h1>
      <embed src="./assets/resume_2_2_2024.pdf" type="application/pdf" width="800" height="800" />
    </div>
  );
}

export default Resume;