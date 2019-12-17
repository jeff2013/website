import React from 'react';
import './App.css';
import Intro from '../intro/Intro';
import AboutMe from '../about-me/AboutMe';

function print(text) {
  console.log(text);
}

function App() {
  return (
    <div className="App">
      <Intro/>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
