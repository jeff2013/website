import React from 'react';
import './App.css';
import Intro from '../intro/Intro';
import AboutMe from '../about-me/AboutMe';
import Photography from '../photography/Photography';
import aboutme from '../../assets/about-me.JPG';

function App() {

  const images = [
    {
      id: 'photo-1',
      image: require('../../assets/photo-1.jpg')
    },
    {
      id: 'photo-2',
      image: require('../../assets/photo-2.jpg')
    },
    {
      id: 'photo-3',
      image: require('../../assets/photo-3.jpg')
    }]

  return (
    <div className="App">
      <Intro/>
      <AboutMe></AboutMe>
      <Photography images={images}></Photography>
    </div>
  );
}

export default App;
