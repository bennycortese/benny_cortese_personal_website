import React, { useState, useEffect } from 'react';
import images from './art_index'; // Assuming this is correctly typed as shown earlier
import Trie from './trieClass'
import './doodles_output.css'


// Define a type for the keys in the images object for better type safety
type ImageKey = keyof typeof images;
const trie = new Trie();

const imageNames: ImageKey[] = [
    'blastoise', // Ensure these match the keys in your images object exactly
    'bart_simpson',
    'gumball',
    'jack_skellington',
    'rat',
    'snoopy',
    'voltorb',
    'oddish',
    'lightbulb_learning',
    'pixel_cutlass',
    'random_doodles',
    'snowman',
    'clown_gangster',
    'catbug',
    'business_cat',
    'green_elephant',
    'blue_elephant',
  ];

const Drawings: React.FC = () => {
  // Use the ImageKey type for useState to ensure the initial value is a valid key
  const [currentImage, setCurrentImage] = useState<string>(images['blastoise']);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredImages, setFilteredImages] = useState<ImageKey[]>([]);

  useEffect(() => {
    imageNames.forEach((name) => trie.insert(name.toLowerCase()));
    setFilteredImages(imageNames.slice(0, 10));
  }, []);

  const handleImageChange = (imageName: ImageKey) => {
    setCurrentImage(images[imageName]);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (!value) {
      setFilteredImages(imageNames.slice(0, 10)); // Keep up to 10 images when there's no search term
      return;
    }

    const suggestions = trie.findAllWithPrefix(value);
    const filtered = imageNames.filter(imageName => suggestions.includes(imageName)).slice(0, 10);
    setFilteredImages(filtered);
};

  return (
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Drawings and Doodles</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search drawings..."
        className="input input-bordered mb-4"
      />
      <div className="flex items-start">
    <img src={currentImage} alt="Selected Art" className="rounded-lg mb-4 mr-8 " />
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mr-8 overflow-y-auto max-h-60" style={{ scrollbarWidth: 'thin' }}>
      <li key='Ten most relevant images based on search: '>
        <button>
            {'Ten most relevant images based on search: '.replace('_', ' ')}
        </button>
      </li>
      {filteredImages.map((imageName) => (
        <li key={imageName}>
          <button onClick={() => handleImageChange(imageName)}>
            {imageName.replace('_', ' ')}
          </button>
        </li>   
      ))}
    </ul>
</div>


      </div>
  );
};

export default Drawings;
