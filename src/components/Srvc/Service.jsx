import React, { useRef, useEffect } from "react";
import "./Service.css";

const ServicePage = () => {
  const topSectionRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.2,
    });

    if (topSectionRef.current) {
      observer.observe(topSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-page-container">
      <h1 className="service-header-title">Our Services</h1>

      {/* Top Section */}
      <div
        className="service-top-section animated-section left-to-right"
        ref={topSectionRef}
      >
        <div className="service-custom-left-class">
          <h2>Our Expertise</h2>
          <p>
            We provide cutting-edge solutions to meet your business needs. From
            mobile and web development to cloud solutions, we've got you
            covered. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur ullam iste fuga, dicta sapiente, aliquam ab nostrum
            voluptatum mollitia dolor perspiciatis blanditiis voluptates quos
            eveniet odit itaque hic? Voluptate, maiores!
          </p>
          <div className="service-button-group">
            <a href="#explore">Explore More</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="service-right-column">
          <img
            src="https://www.clickastro.com/blog/wp-content/uploads/2021/11/Free-astrology-from-renowned-astrologers.jpg"
            alt="Expertise"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
