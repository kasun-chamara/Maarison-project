import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "./About.css"; // Custom styles
import AboutImage from "../../assets/Images/about-image.jpg";

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

      {/* New Image and Content Layout */}
      <div className="about-container">
        {/* Left Side Image */}
        <div className="about-image" data-aos="fade-right">
          <img src={AboutImage} alt="About Us" />
        </div>

        {/* Right Side Content */}
        <div className="about-content" data-aos="fade-left">
          <h3>Our Unique Approach</h3>
          <p>
            We believe in delivering exceptional value through innovative solutions that
            cater to your specific needs. From tailored services to unparalleled support,
            we ensure customer satisfaction every step of the way.<br></br> <br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro temporibus, illum
        provident impedit incidunt suscipit voluptas recusandae minus. 
          </p>
          <button className="discover-more-btn">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
