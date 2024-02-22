import React from 'react';
import './aboutme_output.css';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] flex flex-col items-center justify-center min-h-screen p-2 mb-0">
      <div className="flex flex-row justify-between items-start w-full max-w-6xl mb-0">

      {/* Left Column for my text*/}
      <div className="flex flex-col w-3/4 pr-12 mb-0">

      <div className="text-center">
        <h1 className="text-3xl font-bold mt-0">These are recipes I have accumulated over time:</h1>
      </div>
      
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mr-8 overflow-y-auto max-h-60" style={{ scrollbarWidth: 'thin' }}>
      <li key='Ten most relevant images based on search: '>
        <button>
            {'Ten most relevant images based on search: '.replace('_', ' ')}
        </button>
      </li>

        <li key={"rah"}>
          <button>
            
          </button>
        </li>   
    </ul>

      
    </div>


      </div>
    </div>
    
  );
};

export default AboutMe;
