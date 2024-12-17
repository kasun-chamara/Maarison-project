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
      threshold: 0.2, // Start animation when 20% of the element is visible
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
      <h1 className="service-header-title">Our Services</h1>

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
            covered. Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

      {/* Cards Section */}
      <div
        className="service-cards-section animated-section left-to-bottom"
        ref={cardsSectionRef}
      >
        <div className="service-card">
          <img
            src="https://www.ekhartyoga.com/media/image/articles/Laia_Bove_Mermaid-pose.jpg"
            alt="Yoga"
            className="service-card-image"
          />
          <h3>Yoga</h3>
          <p>
            Explore the harmony of body and mind through Yoga. Enhance physical
            health, relieve stress, and discover inner peace with personalized
            sessions tailored to your needs.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://www.astrologerpanditnarasimha.com/images/vastu-consultant-astrologer-in-ireland.jpg"
            alt="Washthu"
            className="service-card-image"
          />
          <h3>Washthu</h3>
          <p>
            Discover the ancient principles of Washthu. Optimize your living
            spaces to balance energies and improve prosperity, health, and
            well-being.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full_caption/public/field_blog_entry_images/2022-01/black_background.jpg?itok=yS7Q1GW4"
            alt="Psychology"
            className="service-card-image"
          />
          <h3>Psychology</h3>
          <p>
            Understand the human mind with expert psychological guidance. We
            offer therapy, counseling, and support for mental health and
            well-being.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://media.licdn.com/dms/image/D5612AQHomW5Ao2rFRw/article-cover_image-shrink_600_2000/0/1707915359054?e=2147483647&v=beta&t=ThIg61gsEHEjruEyVE2gYNGDckgnEJ3ySB__fwzsExs"
            alt="Jothishya"
            className="service-card-image"
          />
          <h3>Jothishya</h3>
          <p>
            Unlock the mysteries of your future with Jothishya. Get insights
            into your destiny, relationships, and career through expert
            astrological guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
