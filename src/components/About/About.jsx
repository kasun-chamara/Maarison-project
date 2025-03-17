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
        At maarison’s wisdom, we combine the ancient wisdom of astrology with modern insights to provide you with personalized guidance that resonates with your unique life journey. Our team of experienced astrologers and vastu consultants offers a holistic approach to life’s challenges, helping you find clarity, peace, and prosperity. With our trusted expertise, we deliver solutions that are tailored to your specific needs, ensuring you receive the best advice possible. Choose us for:
      </p>
      <ul className="checklist" data-aos="zoom-in">
        <li><img src={Checkmark} alt="Checkmark" /> Accurate and reliable astrological predictions</li>
        <li><img src={Checkmark} alt="Checkmark" /> Customized solutions based on your unique birth chart</li>
        <li><img src={Checkmark} alt="Checkmark" /> Genuine care for your spiritual well-being</li>
        <li><img src={Checkmark} alt="Checkmark" /> Expertise in Vastu Shastra to bring harmony into your living spaces</li>
      </ul>

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
            We believe that astrology is not just about predicting the future—it's about understanding your inner self and aligning your life with the cosmic forces around you. Our unique approach involves:
          </p>
          <ul className="checklist">
            <li><img src={Checkmark} alt="Checkmark" /> Personalized Consultations – We take the time to understand your specific situation and provide astrology consultations that address your personal concerns.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Holistic Solutions – Whether it’s guidance on your career, relationships, or health, our recommendations are based on the complete picture of your life.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Vastu Integration – We combine the ancient science of Vastu Shastra with astrology to offer you practical solutions for peace, prosperity, and balance in your home and workspace.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Natural Remedies – We emphasize the use of organic and natural methods, such as organic saambrani kudu and personalized bangles, for spiritual healing.</li>
          </ul>

        </div>
      </div>

      {/* New Video and Content Layout */}
      <div className="about-container">
        {/* Left Side Content */}
        <div className="about-content" data-aos="fade-right">
          <h3 className="section-title-2">Discover Our Services</h3>
          <p>
            We offer a comprehensive range of services to help you unlock the mysteries of your life and align yourself with the universe’s energy. From astrology insights to Vastu consultations, we ensure every service is designed to provide clarity and balance. Explore our offerings:
          </p>
          <ul className="checklist">
            <li><img src={Checkmark} alt="Checkmark" /> Personalized Predictions – Receive detailed and customized astrological forecasts that offer insight into your life’s path.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Astrology Insights – Deep insights into your horoscope, guiding you in making informed decisions on health, relationships, career, and more.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Personalized Bangles – Specially crafted bangles tailored to your astrological needs for protection, good fortune, and spiritual well-being.</li>
            <li><img src={Checkmark} alt="Checkmark" />Organic Saambrani Kudu  – Pure, organic incense that connects you to higher energies, calming your mind and creating a harmonious environment.</li>
            <li><img src={Checkmark} alt="Checkmark" /> Vastu Consultations – Receive guidance on the layout and design of your home or office according to Vastu principles to enhance positivity and prosperity.</li>
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