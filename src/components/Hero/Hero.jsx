import React, { useState } from 'react';
import './Hero.css';

import LogoImage from '../../assets/images/logo-2.jpg';
// Import the image here

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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
            <button className="btn btn-main mt-3" onClick={togglePopup}>
              Meet Maarison Acharya
            </button>
          </div>
          {/* Right Image Section */}
          <div className="col-md-6 hero-image">
            {/* <div className="image-wrapper">
              <img
                src={MaarisonHero}
                alt="Maarison's Wisdom"
                className="img-fluid"
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Popup Section */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup" style={{ width: '1000px' }}>
            <button className="close-btn" onClick={togglePopup}>
              ×
            </button>
            <div className="popup-content d-flex">
              {/* Left Column */}
              <div className="popup-left d-flex flex-column align-items-center">
                <img
                  src={LogoImage} // Use the imported image
                  alt="Logo"
                  className="popup-logo"
                />
                <h2 className='popup-title'>About Maarison Acharya</h2>
                <p className='popup-description'>
                  Maarison Acharya is a beacon of wisdom, guiding you through life's challenges and helping you find balance and harmony.
                </p>
              </div>
              {/* Right Column */}
              <div className="popup-right">
                <h2 className='popup-title-right'>Fill in Your Details</h2>
                <p className='popup-description-2'>
                  Maarison Acharya is a beacon of wisdom, guiding you through life's challenges and helping you find balance and harmony.
                </p>
                <form
                  action="https://formsubmit.co/878fcfd6a74ff92df0678d58b6ccdc96"  // Form submission URL
                  method="POST"
                >
                  {/* Name, Contact, and Birthday */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact">Contact:</label>
                      <input type="text" id="contact" name="contact" placeholder="Enter your contact" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="birthday">Birthday:</label>
                      <input type="date" id="birthday" name="dob" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="birthtime">Birth Time:</label>
                      <input type="time" id="birthtime" name="birth_time" required />
                    </div>
                  </div>
                  {/* Service Selection and Submit Button */}
                  <div className="form-row">
                    <div className="form-group col-service">
                      <label htmlFor="service">Select Service:</label>
                      <select id="service" name="service" required>
                        <option value="">Select a service</option>
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                        <option value="service3">Service 3</option>
                      </select>
                    </div>
                    <div className="form-group col-submit">
                      <button type="submit" className="btn-submit">
                        Submit
                      </button>
                    </div>
                  </div>

                  {/* Hidden Inputs for FormSubmit */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="http://192.168.8.198:5173/" /> {/* Redirect after submission */}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
