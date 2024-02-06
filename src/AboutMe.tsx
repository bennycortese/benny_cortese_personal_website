import './doodles_output.css';
import React, { useState } from 'react';
import * as images from './art_index'; // Import all images from art_index.tsx

const AboutMe: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>(imagesblastoise); // Default to the first image

  const imageNames = [
    'Blastoise',
    'Bart Simpson',
    'Gumball',
    'Jack Skellington',
    'Rat',
    'Snoopy',
    'Voltorb',
  ];

  const handleImageChange = (imagePath: string) => {
    setCurrentImage(imagePath);
  };

  return (
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Drawings and Doodles</h1>

      <img src={currentImage} alt="Selected Art" className="rounded-lg mb-4" />

      <div className="dropdown dropdown-right dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          Select a drawing
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          {imageNames.map((imageName) => (
            <li key={imageName}>
              <a onClick={() => handleImageChange(images[imageName.toLowerCase().replace(' ', '_')])}>
                {imageName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
