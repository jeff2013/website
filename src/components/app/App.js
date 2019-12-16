import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import Intro from '../intro/Intro';

function print(text) {
  console.log(text);
}

function App() {
  return (
    <div className="App">
      <Intro/>
    </div>
  );
}

export default App;
