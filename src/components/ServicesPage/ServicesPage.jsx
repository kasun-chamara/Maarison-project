import React, { useState } from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Yoga",
      description:
        "Engage in holistic yoga practices that promote physical, mental, and spiritual well-being. Our experienced instructors guide you through personalized sessions to enhance your vitality and peace.",
      image:
        "https://lifeclubapp.com/storage/uploads/2023/07/yoga-ile-stressiz-bir-yasam.webp",
    },
    {
      id: 2,
      title: "Washthu (Vastu Shastra)",
      description:
        "Achieve harmony and balance in your living or working spaces with Vastu Shastra. Our experts analyze your surroundings and offer recommendations to optimize energy flow, creating an environment of peace and prosperity.",
      image:
        "https://cloudimage.homeonline.com/855x451/public/uploads/gallery/articles/14-Vastu-Shastra-Tips-to-Ensure-Safety-of-your-Home.jpg",
    },
    {
      id: 3,
      title: "Psychology",
      description:
        "Explore the depths of the human mind with our psychology services. Whether for mental health, personal growth, or relationship counseling, our therapists provide personalized approaches to improve your emotional well-being.",
      image:
        "https://textexpander.com/wp-content/uploads/psychology-conferences-featured.png",
    },
    {
      id: 4,
      title: "Jothishya (Astrology)",
      description:
        "Discover personalized astrology solutions to guide you through life's journey. Our experts offer detailed readings and remedies based on planetary positions to help you make informed decisions.",
      image:
        "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2024/10/02102004/daily-horoscope-2-oct-2024-1600x900.jpeg",
    },
  ];

  return (
    <div>
      {/* Updated Banner Section */}
      <div className="banner1">
        <h1 className='bannerh1'>Our Services</h1>
        <p>
We provide cutting-edge solutions to meet your business needs. From mobile and web development to cloud solutions, we've got you covered.
        </p>
        {/* Uncomment the button below if needed */}
        {/* <button className="buy-button2">Subscribe</button> */}
      </div>

      {/* Services Section */}
      <div className="services-page-container">
        {services.map((service, index) => (
          <div
            className={`services-page-row ${
              index % 2 !== 0 ? "services-page-row-reverse" : ""
            }`}
            key={service.id}
          >
            <div className="services-page-column services-page-column-left">
              <img
                src={service.image}
                alt={`${service.title} Services`}
                className="services-page-image"
              />
            </div>
            <div className="services-page-column services-page-column-right">
              <h2 className="services-page-title">{service.title}</h2>
              <p className="services-page-description">
                {service.description}
              </p>
              <button className="services-page-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
