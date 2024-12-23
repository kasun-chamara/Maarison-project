import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./Overview.css";
import animatedImage from "../../assets/images/animatedImage.png";
import animatedImage2 from "../../assets/images/animatedImage-2.png";
import clientFeedbackImage from "../../assets/images/src.jpg";
import commaImage from "../../assets/images/comma.png"; // Import the comma image

const Overview = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    services: 0,
    products: 0,
    programs: 0,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const durations = { clients: 20, services: 25, products: 30, programs: 35 };
      Object.keys(durations).forEach((key) => {
        let start = 0;
        const end = { clients: 250, services: 120, products: 80, programs: 60 }[key];
        const interval = setInterval(() => {
          start++;
          setCounts((prev) => ({ ...prev, [key]: start }));
          if (start >= end) clearInterval(interval);
        }, durations[key]);
      });
    }
  }, [inView]);

  return (
    <div className="overview-section" ref={ref}>
      <img src={animatedImage} alt="Animated" className="animated-image-left" />
      <img src={animatedImage} alt="Animated" className="animated-image-right" />
      <div className="overview-wrapper">
        <div className="overview-content">
          <h2 className="overview-title">Our Achievements</h2>
          <p className="overview-description">
            We are proud of our accomplishments and the milestones we have achieved. Our dedication to excellence and our commitment to providing top-notch services have earned us the trust and loyalty of our clients.
          </p>
        </div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-arrow-right",
            prevEl: ".custom-arrow-left",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="slider-container"
        >
          <SwiperSlide>
            <div className="feedback-card">
              <img src={clientFeedbackImage} alt="Client" className="feedback-image" />
              <h5 className="feedback-name">John Doe</h5>
              <div className="feedback-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="feedback-comment">
                "Excellent service and support. Highly recommend!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback-card">
              <img src={clientFeedbackImage} alt="Client" className="feedback-image" />
              <h5 className="feedback-name">Jane Smith</h5>
              <div className="feedback-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="feedback-comment">
                "Great experience and fantastic support!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback-card">
              <img src={clientFeedbackImage} alt="Client" className="feedback-image" />
              <h5 className="feedback-name">Alice Johnson</h5>
              <div className="feedback-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="feedback-comment">
                "Highly recommend their services!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback-card">
              <img src={clientFeedbackImage} alt="Client" className="feedback-image" />
              <h5 className="feedback-name">Bob Brown</h5>
              <div className="feedback-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="feedback-comment">
                "Outstanding support and service!"
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src={commaImage} alt="Comma" className="comma-image" /> {/* Add the comma image */}
    </div>
  );
};

export default Overview;
