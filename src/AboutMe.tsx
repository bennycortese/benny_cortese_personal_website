import React from 'react';
import './aboutme_output.css';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] flex flex-col items-center justify-center min-h-screen p-5">
      {/* Introduction Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Hi, I'm Benjamin (Benny) Cortese</h1>
        <p className="text-xl mt-2">Incoming Software Engineer Intern at Figma, passionate about building scalable software solutions and contributing to open source.</p>
      </div>

      {/* Professional Experience Section */}
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center mb-5">Professional Experience</h2>
        <ul className="list-disc pl-5">
          <li>Software Engineer Intern at Figma (Oct 2023 - Present)</li>
          <li>Neo Scholar Finalist (Jul 2023 - Present)</li>
          <li>Software Engineer Intern at Microsoft (May 2023 - Aug 2023 & May 2022 - Aug 2022)</li>
          <li>Undergraduate Teaching Assistant at UF (Various Courses, Aug 2021 - Present)</li>
        </ul>
      </div>


      {/* Skills Section */}
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center mb-5">Skills</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="badge badge-outline">C++</div>
          <div className="badge badge-outline">JavaScript</div>
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Go</div>
          <div className="badge badge-outline">Kubernetes</div>
          <div className="badge badge-outline">Python</div>
        </div>
      </div>

      {/* Education & Awards Section */}
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center mb-5">Education & Awards</h2>
        <p>Bachelor of Science in Computer Science and Mathematics, University of Florida (2020 - 2024) - GPA: 3.97/4.0</p>
        <ul className="list-disc pl-5">
          <li>ICPC Medalist (Feb 2023)</li>
          <li>Georgia Tech Hackathon Best Retro Hack Award Winner (Oct 2022)</li>
          <li>Gartner Group Information Technology Scholarship (Apr 2022)</li>
          <li>Cottmeyer Family Scholarship (Apr 2023)</li>
        </ul>
      </div>


      <button
  className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6"
  onClick={() => window.location.href = 'https://www.linkedin.com/in/benny-cortese/'}
>
  <svg
    className="w-8 h-8 fill-neutral-50"
    height="100"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 100 100"
    width="100"
    x="0"
    xmlns="http://www.w3.org/2000/svg"
    y="0"
  >
    <path
      d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
    ></path>
  </svg>
  <span className="border-l-2 px-1">Benjamin Cortese</span>
  <div
    className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
  >
    See my profile!
  </div>
</button>
    </div>
    
  );
};

export default AboutMe;
