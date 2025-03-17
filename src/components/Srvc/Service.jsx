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
      We offer a range of services to support your spiritual and practical journey through life:

      </p>
      {/* Top Section */}
      <div
        className="service-top-section animated-section left-to-bottom"
        ref={topSectionRef}
      >
        <div className="service-custom-left-class">
          <h2>Personalized Predictions</h2>
          <p>
          Personalized Predictions,
          Based on your unique astrological chart, we provide tailored predictions about your life’s journey, helping you navigate challenges and make empowered decisions.
          </p>
          {/* <div className="service-button-group">
            <a href="#explore">Explore More</a>
          </div> */}
        </div>

        <div className="service-right-column">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/66fd590b77b265636f7df4eb/Astrologer-using-mobile-smart-phone-app-and-computer-to-make-predictions-on-future/960x0.jpg?height=474&width=711&fit=bounds"
            alt="Expertise"
          />
        </div>
      </div>

      {/* 1200px and above: Four colored cards */}
      <div className="service-cards-container" ref={cardsSectionRef}>
  <div className="service-card card-1">
    <div className="card-image">
      <img
        src="https://saketbhatia.com/wp-content/uploads/2023/01/solar-system-with-planets-and-numbers-in-space-1024x585.webp"
        alt="Card 1"
      />
    </div>
    <div className="card-content">
      <h3>Astrology Insights</h3>
      <p>Gain deeper insight into your horoscope, understand your strengths and challenges, and receive guidance that aligns with your life’s purpose.</p>
      {/* <a href="#learn-more" className="card-button">Learn More</a> */}
    </div>
  </div>
  <div className="service-card card-2">
    <div className="card-image">
      <img
        src="https://i.etsystatic.com/11643802/r/il/18b093/1335290595/il_570xN.1335290595_2mjn.jpg"
        alt="Card 2"
      />
    </div>
    <div className="card-content">
      <h3>Personalized Bangles</h3>
      <p>These specially designed bangles are created to match your birth chart and astrological requirements. They offer protection, positivity, and prosperity.</p>
      {/* <a href="#learn-more" className="card-button">Learn More</a> */}
    </div>
  </div>
  <div className="service-card card-3">
    <div className="card-image">
      <img
        src="https://www.thugil.com/pub/media/catalog/product/cache/e803c1b4714a8f5bf8d014633abc652b/p/j/pjp032-sambrani-cup.jpg"
        alt="Card 3"
      />
    </div>
    <div className="card-content">
      <h3>Organic Saambrani Kudue</h3>
      <p> Experience the soothing power of organic saambrani kudu, a natural incense that purifies your space and helps you connect with your higher self.</p>
      {/* <a href="#learn-more" className="card-button">Learn More</a> */}
    </div>
  </div>
  <div className="service-card card-4">
    <div className="card-image">
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2024/10/461172479/SU/QT/LM/23146979/house-land-vastu-consultancy-services-expert-500x500.jpg"
        alt="Card 4"
      />
    </div>
    <div className="card-content">
      <h3>Vastu Consultations</h3>
      <p>Our vastu experts provide advice on how to design your home or workspace to promote peace, success, and well-being according to ancient vastu principles.</p>
      {/* <a href="#learn-more" className="card-button">Learn More</a> */}
    </div>
  </div>
</div>

    </div>
  );
};

export default ServicePage;
