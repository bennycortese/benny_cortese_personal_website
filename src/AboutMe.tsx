import './doodles_output.css';
import React, {useState} from 'react';
import blastoise from './benny_art/blastoise1.png';
import bart_simpson from './benny_art/bart_simpson1.png';
import gumball from './benny_art/gumball1.png';
import jack_skellington from './benny_art/jack_skellington1.png';
import pearls_rat from './benny_art/pearls_rat1.png';
import snoopy from './benny_art/snoopy1.png';
import voltorb from './benny_art/voltorb1.png';

// need to fix typescript issues, but hopefully can fix this and then dump all my art here
const images = require.context('./benny_art', true);
const imageList = images.keys().map(image => images(image));

const AboutMe: React.FC = () => {
const [currentImage, setCurrentImage] = useState<string>(blastoise); // Default to the first image

const all_images = images;

  return (
    
    <div style={{ backgroundColor: '#FAF9F6' }} className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Drawings and Doodles</h1>

      <img src={currentImage} alt="Selected Art" className="rounded-lg mb-4" />


      <div className="dropdown dropdown-right dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">Select a drawing</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a onClick={() => setCurrentImage(blastoise)}>Blastoise</a></li>
              <li><a onClick={() => setCurrentImage(bart_simpson)}>Bart Simpson</a></li>
              <li><a onClick={() => setCurrentImage(gumball)}>Gumball</a></li>
              <li><a onClick={() => setCurrentImage(jack_skellington)}>Jack Skellington</a></li>
              <li><a onClick={() => setCurrentImage(pearls_rat)}>Rat</a></li>
              <li><a onClick={() => setCurrentImage(snoopy)}>Snoopy</a></li>
              <li><a onClick={() => setCurrentImage(voltorb)}>Voltorb</a></li>
          </ul>
        </div>
    </div>
    
  );
}

export default AboutMe;
