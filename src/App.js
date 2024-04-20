import React, { useState } from 'react';
import './App.css';
import Splash from './Components/Splash';
import Home from './Components/Home';

const App = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
      setVideoEnded(true);
  };

    return (
      <div className='header'>
      {!videoEnded && <Splash onVideoEnd={handleVideoEnd} />}
      {videoEnded && <Home />}
  </div>
    );
};

export default App;
