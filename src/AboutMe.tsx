import React from 'react';
import './aboutme_output.css';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] flex flex-col items-center justify-center min-h-screen p-5">
      {/* Introduction Section */}

      
      <div className="text-center">
        <h1 className="text-3xl font-bold">Hi, I am Benny Cortese!</h1>
        <p className="text-xl mt-2 mb-4">Incoming Software Engineer Intern at Figma, passionate about building awesome things with technology!</p>
      </div>

      <div className="card card-bordered w-96 shadow-xl bg-[#FAF9F6]">
        <figure className="bg-[#FAF9F6] p-4">
        <img src="./assets/benny_cortese_self.jpg" alt="Benny Cortese" className="rounded-lg w-128 h-128 object-cover bg-[#FAF9F6]"></img>
        </figure> 
    </div>




      {/* Professional Experience Section */}
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center mb-5">Professional Experience</h2>
        <ul className="list-disc pl-5">
          <li>Incoming Software Engineering Intern at Figma (May 2024 - August 2024)</li>
          <li>Neo Scholar Finalist (Jul 2023 - Present)</li>
          <li>Software Engineer Intern at Microsoft working on Kubernetes related projects (May 2023 - Aug 2023 and May 2022 - Aug 2022)</li>
          <li>Teaching Assistant at UF for Data Structures, OS, Discrete Structures, and Programming Language Concepts (Aug 2021 - Present)</li>
        </ul>
      </div>



      {/* Skills Section */}
      <div className="my-6">
        <h2 className="text-2xl font-bold text-center mb-5">Skills</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="skill-icon"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="skill-icon"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" className="skill-icon"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" alt="Go" className="skill-icon"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="skill-icon"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes" className="skill-icon"/>
          
        </div>
      </div>

      {/* Education & Awards Section */}
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center mb-5">Education & Awards</h2>
        <p>Bachelor of Science in Computer Science and Mathematics, University of Florida (August 2020 - May 2024) - GPA: 3.97/4.0</p>
        <ul className="list-disc pl-5">
          <li>Cottmeyer Family Scholarship for $5000 (Apr 2023)</li>
          <li>ICPC Medalist (Feb 2023)</li>
          <li>Georgia Tech Hackathon Best Retro Hack Award Winner (Oct 2022)</li>
          <li>Gartner Group Information Technology Scholarship for $1000 (Apr 2022)</li>
        </ul>
      </div>

    </div>
    
  );
};

export default AboutMe;
