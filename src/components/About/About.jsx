import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "./About.css"; // Custom styles
import AboutImage from "../../assets/Images/abcdef.png";
import CardImage1 from "../../assets/Images/abc.png"; // Replace with actual image paths
import CardImage2 from "../../assets/Images/abc.png";
import CardImage3 from "../../assets/Images/abc.png";
import CardImage4 from "../../assets/Images/abc.png";
import CardImage5 from "../../assets/Images/abc.png";
import CardImage6 from "../../assets/Images/abc.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="about-section">
      {/* Title Section */}
      <h3 className="section-sub-title1">Exclusive Deals Just for You</h3>
      <h2 className="why-choose-us" data-aos="fade-down">
        Why Choose Us
      </h2>
      <p className="pclass" data-aos="zoom-in">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro temporibus, illum
        provident impedit incidunt suscipit voluptas recusandae minus. Dignissimos est quidem
        unde maxime, numquam tenetur ipsum nisi soluta distinctio eius.
      </p>

      <div className="about-wrapper">
        {/* Center Image */}
        <div className="about-image" data-aos="zoom-in">
          <img src={AboutImage} alt="Main Illustration" />
        </div>

        {/* Cards Around the Image */}
        <div className="about-card top-left" data-aos="fade-right">
          <img src={CardImage1} alt="Icon 1" className="card-icon" />
          <div className="card-content">
            <p>A calm mind helps you achieve self-realization and inner peace.</p>
          </div>
        </div>
        <div className="about-card top-right" data-aos="fade-left">
          <img src={CardImage2} alt="Icon 2" className="card-icon" />
          <div className="card-content">
            <p>
              Meditation connects us with the universe by removing mental agitation.
            </p>
          </div>
        </div>
        <div className="about-card left-center" data-aos="fade-right">
          <img src={CardImage3} alt="Icon 3" className="card-icon" />
          <div className="card-content">
            <p>Empower yourself with balance, harmony, and emotional strength.</p>
          </div>
        </div>
        <div className="about-card right-center" data-aos="fade-left">
          <img src={CardImage4} alt="Icon 4" className="card-icon" />
          <div className="card-content">
            <p>Embrace positivity and develop deeper emotional connections.</p>
          </div>
        </div>
        <div className="about-card bottom-left" data-aos="fade-up-right">
          <img src={CardImage5} alt="Icon 5" className="card-icon" />
          <div className="card-content">
            <p>A peaceful mind is the key to joy, creativity, and resilience.</p>
          </div>
        </div>
        <div className="about-card bottom-right" data-aos="fade-up-left">
          <img src={CardImage6} alt="Icon 6" className="card-icon" />
          <div className="card-content">
            <p>Overcome stress and unlock your full potential with meditation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
