import React, { useState } from 'react';
import images from './art_index'; // Assuming this is correctly typed as shown earlier


// Define a type for the keys in the images object for better type safety
type ImageKey = keyof typeof images;

const Drawings: React.FC = () => {
  // Use the ImageKey type for useState to ensure the initial value is a valid key
  const [currentImage, setCurrentImage] = useState<string>(images['blastoise']);

  const imageNames: ImageKey[] = [
    'blastoise', // Ensure these match the keys in your images object exactly
    'bart_simpson',
    'gumball',
    'jack_skellington',
    'rat',
    'snoopy',
    'voltorb',
  ];

  const handleImageChange = (imageName: ImageKey) => {
    setCurrentImage(images[imageName]);
  };

  return (
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Drawings and Doodles</h1>
      <img src={currentImage} alt="Selected Art" className="rounded-lg mb-4" />
      <div className="dropdown dropdown-right dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          Select a drawing
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {imageNames.map((imageName) => (
        <li key={imageName as string}>
            <button onClick={() => handleImageChange(imageName)}>
            {(imageName as string).replace('_', ' ')}
            </button>
        </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawings;
