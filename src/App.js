import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import './App.css';
import Splash from './Components/Splash';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Careers from './Components/Careers';
const App = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
      setVideoEnded(true);
  };

    return (
      <Router>
        <div className='header'>
          {!videoEnded && <Splash onVideoEnd={handleVideoEnd} />}
          {videoEnded && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </div>
      </Router>
    );
};

export default App;
