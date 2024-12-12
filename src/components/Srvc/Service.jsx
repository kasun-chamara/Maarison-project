import React, { useRef, useEffect } from "react";
import "./Service.css";
import placeholderImage1 from "../../assets/images/src.jpg";
import placeholderImage2 from "../../assets/images/src.jpg";
import placeholderImage3 from "../../assets/images/src.jpg";
import placeholderImage4 from "../../assets/images/src.jpg";

const ServicePage = () => {
  const topSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);

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
    if (bottomSectionRef.current) {
      observer.observe(bottomSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Yoga",
      description: "Relax your body and mind with expert yoga sessions.",
      image: placeholderImage1,
    },
    {
      id: 2,
      title: "Washthu",
      description: "Enhance your living with Washthu-inspired solutions.",
      image: placeholderImage2,
    },
    {
      id: 3,
      title: "Psychology",
      description: "Unlock your potential with our psychology services.",
      image: placeholderImage3,
    },
    {
      id: 4,
      title: "Jothishya",
      description: "Explore your destiny through personalized astrology.",
      image: placeholderImage4,
    },
  ];

  return (
    <div className="service-page-container">
      <h1 className="service-header-title">Our Services</h1>

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
          <img src={placeholderImage1} alt="Expertise" />
        </div>
      </div>

      <div
        className="service-bottom-row animated-section right-to-left"
        ref={bottomSectionRef}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-column service-column-${service.id}`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-column-image"
            />
            <h3 className="service-column-title">{service.title}</h3>
            <p className="service-column-description">{service.description}</p>
            <div className="service-read-more">
              <button className="service-read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
