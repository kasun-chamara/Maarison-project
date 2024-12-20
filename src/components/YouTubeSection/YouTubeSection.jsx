import React from 'react';
import './YouTubeSection.css';

const YouTubeSection = () => {
  return (
    <div className="youtube-section">
      <div className="video-container">
        <div className="main-video">
          <video width="100%" height="100%" controls autoPlay>
            <source src="../../assets/images/About-vd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="small-videos">
          <div className="small-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/K0ibBPhiaG0" 
              title="Small Video 1"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="small-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/K0ibBPhiaG0" 
              title="Small Video 2"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="small-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/K0ibBPhiaG0" 
              title="Small Video 3"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;