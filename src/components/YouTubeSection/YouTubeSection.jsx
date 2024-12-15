import React from 'react';
import './YouTubeSection.css';

const YouTubeSection = () => {
  return (
    <div className="youtube-section container mt-5">
      <div className="row">
        {/* Left Side - Main Video */}
        <div className="col-lg-8 mb-4">
          <div className="main-video">
            <iframe 
              width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Main Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side - 2x2 Smaller Videos */}
        <div className="col-lg-4">
          <div className="row g-3">
            <div className="col-6">
              <iframe 
                width="100%" 
                height="100" 
                src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                title="Small Video 1"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-6">
              <iframe 
                width="100%" 
                height="100" 
                src="https://www.youtube.com/embed/3JZ_D3ELwOQ" 
                title="Small Video 2"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-6">
              <iframe 
                width="100%" 
                height="100" 
                src="https://www.youtube.com/embed/2Vv-BfVoq4g" 
                title="Small Video 3"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-6">
              <iframe 
                width="100%" 
                height="100" 
                src="https://www.youtube.com/embed/K0ibBPhiaG0" 
                title="Small Video 4"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;
