import React, { useEffect } from 'react';
import './ProgramSection.css'; // Import the corresponding CSS file

// Import images from the assets folder
import planetIcon from '../../assets/images/planet.png';
import astrologyBanner1 from '../../assets/images/event1.svg';
import astrologyBanner2 from '../../assets/images/event2.svg';
import zodiacIcon from '../../assets/images/zodiac.png'; // Import zodiac icon

const ProgramSection = () => {
  useEffect(() => {
    const columns = document.querySelectorAll('.custom-column');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    columns.forEach((column) => observer.observe(column));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="custom-row">
      {/* First Row: Single Column with Image */}
      <div className="custom-column column-1 fade-in">
        <img src={astrologyBanner1} alt="Astrology Services Banner 1" />
      </div>

      {/* Second Row: Two Text Columns */}
      <div className="custom-column column-2 no-animation">
        <div className="content-wrapper">
          <div className="h6-wrapper">
            <img src={zodiacIcon} alt="Zodiac Icon" className="zodiac-icon" />
            <h6>Maarison Wisdom</h6>
          </div>
          <h2>Personalized Predictions</h2>
          <div className="icon-wrapper">
            <img src={planetIcon} alt="Planet Icon" />
            <h4>Shape Your Path</h4>
          </div>
          <p>
            Discover how astrology can guide your life journey. Learn about your zodiac, personality traits, and predictions tailored just for you. Learn about your zodiac, personality traits, and predictions tailored just for you.
          </p>
          <button className="discover-button">More Discover</button>
        </div>
      </div>

      <div className="custom-column column-3 no-animation">
        <div className="content-wrapper">
          <div className="h6-wrapper">
            <img src={zodiacIcon} alt="Zodiac Icon" className="zodiac-icon" />
            <h6>Maarison Wisdom</h6>
          </div>
          <h2>Astrology Insights</h2>
          <div className="icon-wrapper">
            <img src={planetIcon} alt="Planet Icon" />
            <h4>Unlock Your Future</h4>
          </div>
          <p>
            Discover how astrology can guide your life journey.Learn about your zodiac, personality traits, and predictions tailored just for you. Learn about your zodiac, personality traits, and predictions tailored just for you.
          </p>
          <button className="discover-button">More Discover</button>
        </div>
      </div>

      {/* Third Row: Single Column with Image */}
      <div className="custom-column column-4 fade-in">
        <img src={astrologyBanner2} alt="Astrology Services Banner 2" />
      </div>
    </div>
  );
};

export default ProgramSection;
