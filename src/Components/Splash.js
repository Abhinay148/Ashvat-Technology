import React from 'react';
import videoSource from'../image/Ashvat Technologies.mp4';

const Splash = ({ onVideoEnd }) => {
    const handleVideoEnd = () => {
        console.log("Video ended");
        onVideoEnd();
    };
    return (
        <div className='splash'>
        <video autoPlay muted onEnded={handleVideoEnd} className="fullscreen-video">
            <source src={videoSource} type='video/mp4' />
        </video>
    </div>
    );
};

export default Splash;
