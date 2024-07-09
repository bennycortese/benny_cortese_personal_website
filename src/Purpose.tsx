import React from 'react';
import './purpose_output.css'; // Assuming your CSS is defined here. Adjust the import path as necessary.

const Purpose: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 mb-0">
      <div className="flex flex-row justify-between items-start w-full max-w-6xl mb-0">
        {/* Centered Content */}
        <div className="flex flex-col w-full px-4 mb-0 text-center"> {/* Adjusted to full width and added padding for centering */}
          <h1 className="text-3xl font-bold p-2 mt-8">Welcome to my website!</h1>
          <p className="text-xl mt-2">
            Hi there! I'm Benny Cortese, a software engineer with a love of this world. This website is a place where I share my experimental works and talk about who I am. Look around to see who I am and what I have been up to, and thank you for popping by!
          </p>
          <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-2">Why I do what I do</h2>
        <ul className="list-style-type: disc; padding-left: 20px;">
    <li className="text-xl margin-bottom: 10px; mb-2">I want to revolutionize the field of education with technology.</li>
    <li className="text-xl margin-bottom: 10px; mb-2">With increasing advances in machine learning like the LLM, generative testing models can understand what students know and adapt to them.</li>
    <li className="text-xl margin-bottom: 10px; mb-2"> I believe in a future where every student has their learning experience tuned towards their own needs. </li>
    <li className="text-xl"> I am working towards that future through learning and developing software and machine learning models. </li>
    </ul>
    <div className="flex justify-center items-center"> {/* Example for full viewport centering */}
        <img src={"./assets/lightbulb_logo.png"} alt="Logo" className="h-96" />
    </div>

      </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
