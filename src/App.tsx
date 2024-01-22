import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App_output.css';
import AboutMe from './AboutMe';

// Placeholder components for demonstration
const Projects: React.FC = () => <div><h1>Projects Page</h1></div>;
const Resume: React.FC = () => <div><h1>Resume Page</h1></div>;
const Home: React.FC = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>Hello! I am Benny Cortese! Welcome to my Shenanigans!</p>
  </header>
);

const App: React.FC = () => {
    return (
      <Router>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">Benny Cortese</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/aboutme">About Me</Link></li> {/* Ensure URL is lowercase */}
            </ul>
          </div>
        </div>
  
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/aboutme" element={<AboutMe />} /> {/* Ensure URL is lowercase */}
        </Routes>
      </Router>
    );
}

export default App;
