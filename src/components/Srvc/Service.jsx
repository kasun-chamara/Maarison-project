import React, { useRef, useEffect } from "react";
import "./Service.css";

const ServicePage = () => {
  const topSectionRef = useRef(null);
  const cardsSectionRef = useRef(null);

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

    // Observe the sections
    if (topSectionRef.current) {
      observer.observe(topSectionRef.current);
    }
    if (cardsSectionRef.current) {
      observer.observe(cardsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-page-container">
      <h3 className="section-sub-title1">Exclusive Deals Just for You</h3>
      <h1 className="service-header-title">Our Services</h1>
      <p className="pclass" data-aos="zoom-in">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro temporibus, illum
        provident impedit incidunt suscipit voluptas recusandae minus. Dignissimos est quidem
        unde maxime, numquam tenetur ipsum nisi soluta distinctio eius.
      </p>
      {/* Top Section */}
      <div
        className="service-top-section animated-section left-to-bottom"
        ref={topSectionRef}
      >
        <div className="service-custom-left-class">
          <h2>Our Expertise</h2>
          <p>
            We provide cutting-edge solutions to meet your business needs. From
            mobile and web development to cloud solutions, we've got you
            covered.
          </p>
          <div className="service-button-group">
            <a href="#explore">Explore More</a>
          </div>
        </div>

        <div className="service-right-column">
          <img
            src="https://www.clickastro.com/blog/wp-content/uploads/2021/11/Free-astrology-from-renowned-astrologers.jpg"
            alt="Expertise"
          />
        </div>
      </div>

      {/* 1200px and above: Four colored cards */}
      <div className="service-cards-container" ref={cardsSectionRef}>
        <div className="service-card card-1">
          <div className="card-image">
            <img
              src="https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-ZRO9/yoga_body_images-slide-ZRO9-jumbo.jpg"
              alt="Card 1"
            />
          </div>
          <div className="card-content">
            <h3>Card 1 Title</h3>
            <p>Some description for Card 1. It explains the content in more detail.</p>
          </div>
        </div>
        <div className="service-card card-2">
          <div className="card-image">
            <img
              src="https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-ZRO9/yoga_body_images-slide-ZRO9-jumbo.jpg"
              alt="Card 2"
            />
          </div>
          <div className="card-content">
            <h3>Card 2 Title</h3>
            <p>Some description for Card 2. It explains the content in more detail.</p>
          </div>
        </div>
        <div className="service-card card-3">
          <div className="card-image">
            <img
              src="https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-ZRO9/yoga_body_images-slide-ZRO9-jumbo.jpg"
              alt="Card 3"
            />
          </div>
          <div className="card-content">
            <h3>Card 3 Title</h3>
            <p>Some description for Card 3. It explains the content in more detail.</p>
          </div>
        </div>
        <div className="service-card card-4">
          <div className="card-image">
            <img
              src="https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-ZRO9/yoga_body_images-slide-ZRO9-jumbo.jpg"
              alt="Card 4"
            />
          </div>
          <div className="card-content">
            <h3>Card 4 Title</h3>
            <p>Some description for Card 4. It explains the content in more detail.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
