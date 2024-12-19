import React from 'react';
import './Hero.css'; // Import the CSS file for styling
import MaarisonHero from '../../assets/images/MR.png'; // Adjust the path as needed

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content Section */}
          <div className="col-md-6 hero-content">
            <h1 className="hero-title">Welcome to Maarison's Wisdom</h1>
            <p className="hero-subtitle">
              The simplest way to bring balance to your thoughts and emotions is unwavering commitment towards something.
            </p>
            <button className="btn btn mt-3">Meet Maarison Acharya</button>
          </div>
          {/* Right Image Section */}
          <div className="col-md-6 hero-image">
            <div className="image-wrapper">
              <img
                src={MaarisonHero} // Use the imported image here
                alt="Maarison's Wisdom"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
