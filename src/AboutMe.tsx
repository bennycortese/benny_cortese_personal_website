import React from 'react';
import './aboutme_output.css';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] flex flex-col items-center justify-center min-h-screen p-2 mb-0">
      <div className="flex flex-row justify-between items-start w-full max-w-6xl mb-0">

      {/* Left Column for my text*/}
      <div className="flex flex-col w-3/4 pr-12 mb-0">

      <div className="text-center">
        <h1 className="text-3xl font-bold mt-0">Hi, I am Benny Cortese!</h1>
        <p className="text-xl mt-2">I am passionate about building awesome things with technology!</p>
      </div>
        

      {/* Professional Experience Section -- definitely add images */}
      <div className="my-4">
        <h2 className="text-2xl font-bold text-center mb-2">Professional Experience</h2>
        <div className="grid grid-cols-3 gap-4 mb-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="mx-auto w-32 h-32"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="mx-auto w-32 h-32"/>
          <img src="https://media.licdn.com/dms/image/v2/D560BAQGMuyaxxew9AA/company-logo_200_200/company-logo_200_200/0/1727939535273/momentic_ai_logo?e=1751500800&v=beta&t=540UdsEqBF_WlJHq4cklVswtaphIu6MG3o4oKPIEgfc" alt="Momentic" className="mx-auto w-32 h-32"/>
          <img src="https://media.licdn.com/dms/image/v2/C560BAQHpvZB-7BigTg/company-logo_200_200/company-logo_200_200/0/1631417945298/kpcb_fellows_program_logo?e=1751500800&v=beta&t=kpjkKJSZoRcSX3akskvZjUZJhPkiuOi7h0hKVptltHY" alt="KP fellow" className="mx-auto w-32 h-32"/>
          <img src="https://media.licdn.com/dms/image/v2/C560BAQGZOQ8pLmLpDQ/company-logo_200_200/company-logo_200_200/0/1630665521597/neoventures_logo?e=1751500800&v=beta&t=tVJTReQRyAxCoGtgb-RlPea_ilv-uaRH0pTOQOfeChU" alt="Neo" className="mx-auto w-32 h-32"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png" alt="YCombinator" className="mx-auto w-32 h-32"/>
        </div>
        <ul className="list-disc pl-5">
          <li> Software Engineer at Meta on the Profile Infrastructure team doing full-stack development (May 2025 - Present)</li>
          <li> Founding Engineer at Momentic, 2nd Engineer hired, YC S24 (January 2025 - April 2025)</li>
          <li>Kleiner Perkins Engineering Fellow (May 2024 - Present)</li>
          <li>Software Engineering Intern at Figma on Figjam AI and AI Productivity teams (May 2024 - August 2024)</li>
          <li>Neo Scholar Finalist (Jul 2023 - Present)</li>
          <li>Software Engineer Intern at Microsoft working on Kubernetes projects (May 2023 - Aug 2023, May 2022 - Aug 2022)</li>
          <li>Teaching Assistant at UF for Data Structures, OS, Discrete Structures, and Programming Language Concepts (Aug 2021 - May 2024)</li>
        </ul>
      </div>

      {/* Skills Section */}
      <div className="">
        <h2 className="text-2xl font-bold text-center mb-1 mt-2">Skills</h2>
        <div className="grid grid-cols-3 gap-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="mx-auto w-32 h-32"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="mx-auto w-32 h-32"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" className="mx-auto w-32 h-32"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" alt="Go" className="mx-auto w-32 h-32"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="mx-auto w-32 h-32"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes" className="mx-auto w-32 h-32"/>
        </div>
      </div>

      {/* Education & Awards Section */}
      <div className="my-4">
        <h2 className="text-2xl font-bold text-center mb-2">Education & Awards</h2>
        <p>Bachelor of Science in Computer Science and Mathematics from the University of Florida (August 2020 - May 2024) - GPA: 3.97/4.0</p>
        <ul className="list-disc pl-5">
          <li>ICPC Gold Medalist (Feb 2024)</li>
          <li>Cottmeyer Family Scholarship for $5000 (Apr 2023)</li>
          <li>ICPC Bronze Medalist (Feb 2023)</li>
          <li>Georgia Tech Hackathon Best Retro Hack Award Winner (Oct 2022)</li>
          <li>Gartner Group Information Technology Scholarship for $1000 (Apr 2022)</li>
        </ul>
      </div>

        {/* End of left text section */}
      </div>

    {/* Start of self image section */}
    <div className="flex justify-end  pl-12">
      <div className="card card-bordered shadow-xl bg-[#FAF9F6]">
        <figure className="bg-[#FAF9F6] p-4">
        <img src="./assets/benny_cortese_self.jpg" alt="Benny Cortese" className="rounded-lg w-256 h-256 object-cover bg-[#FAF9F6]"></img>
        </figure> 
      </div>
      
      {/* End of Right section */}
    </div>


      </div>
    </div>
    
  );
};

export default AboutMe;
