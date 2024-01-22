import React from 'react';
import logo from './logo.svg';
import './App_output.css';

function App() {
  return (
    
    
    <div className="App">

    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Benny Cortese</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>Projects</a></li>
                <li><a>Resume</a></li>
                <li><a>About Me</a></li>
            </ul>
        </div>
    </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! I am Benny Cortese! Welcome to my Schenanigans!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

export default App;
