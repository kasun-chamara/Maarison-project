import React, { useEffect, useRef, useState } from "react";
import "./MeetMaarisonAcharya.css";
import Contactbg from "../../assets/images/Contactbg.svg";
import DotsSvg from "../../assets/images/Dots.svg";
import zodiacIcon from "../../assets/images/zodiac.png";
import meetImage from "../../assets/images/meet-image.jpg";

const MeetMaarisonAcharya = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="meet-container">
      {/* Top Image Section */}
      <div className="image-section">
        <img src={Contactbg} alt="Top Banner" className="full-image" />
        <div className="overlay">
          <h1 className="title">Meet Maarison Acharya</h1>
          <p className="description">
            Discover the mystical world of astrology with personalized readings
            and services.
          </p>
          <div className="icon-container">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.Whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <img src={DotsSvg} alt="Decorative Dots" className="dots-image" />

      {/* Animated Section */}
      <div
        ref={sectionRef}
        className={`columns-container animate-bottom-to-top ${isVisible ? "visible" : ""}`}
      >
        {/* Left Column */}
        <div className="left-column">
          <img src={meetImage} alt="Astrology Image" className="side-image" />
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="h6-wrapper-2">
            <img src={zodiacIcon} alt="Zodiac Icon" className="zodiac-icon" />
            <h6>Maarison Wisdom</h6>
          </div>
          <h2>Contact Us</h2>
          <form
            className="contact-form"
            action="https://formsubmit.co/kapilanranasinghe@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="phone" placeholder="Phone Number" required />
            
            <div className="date-time-row">
              <input type="date" name="dob" placeholder="Date of Birth" required />
              <input type="time" name="birth_time" placeholder="Birth Time" required />
            </div>
            
            <input type="text" name="birth_location" placeholder="Birth Location" required />
            
            <div className="service-row">
              <select name="service" required>
                <option value="" disabled selected>Select Service</option>
                <option value="horoscope">Horoscope</option>
                <option value="astrology">Astrology Reading</option>
                <option value="numerology">Numerology</option>
              </select>
              <button type="submit" className="button">Submit</button>
            </div>
            
            {/* Hidden Inputs for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://maarisonacharya.com/" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MeetMaarisonAcharya;