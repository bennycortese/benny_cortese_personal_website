
import React, {useState} from 'react';

const Resume: React.FC = () => {
const [currentImage, setCurrentImage] = useState<string>(); // Default to the first image

  return (
    
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Drawings and Doodles</h1>

      <img src={currentImage} alt="Selected Art" className="rounded-lg mb-4" />


      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">Select an option</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          </ul>
        </div>
    </div>
    
  );
}

export default Resume;
