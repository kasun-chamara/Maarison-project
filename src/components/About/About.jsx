import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "./About.css"; // Custom styles
import AboutImage from "../../assets/Images/about-image.jpg";
import AboutVideo from "../../assets/Images/About-vd.mp4";
import Checkmark from "../../assets/Images/checkmark.png";

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
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

      {/* New Video and Content Layout */}
      <div className="about-container">
        {/* Left Side Content */}
        <div className="about-content" data-aos="fade-right">
          <h3 className="section-title-2">Discover Our Services</h3>
          <p>
            Our services are designed to provide you with the best experience possible. We
            offer a wide range of solutions to meet your needs and exceed your expectations.
          </p>
          <ul className="checklist">
            <li><img src={Checkmark} alt="Checkmark" /> High-quality products.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Exceptional customer service.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Affordable pricing.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Fast and reliable delivery.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Satisfaction guaranteed.</li>
          </ul>
        </div>

        {/* Right Side Video */}
        <div className="about-video" data-aos="fade-left">
          <video ref={videoRef} controls>
            <source src={AboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;