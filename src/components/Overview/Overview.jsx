import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Overview.css";
import clientsIcon from "../../assets/images/Clients.svg";
import servicesIcon from "../../assets/images/Services.svg";
import productsIcon from "../../assets/images/Product.svg";
import programIcon from "../../assets/images/Program.svg";
import overviewImage from "../../assets/images/Overview-image.png";

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
      <div className="overview-wrapper">
        <div className="overview-content">
          <h2 className="overview-title">Our Achievements</h2>
          <p className="overview-description">
            We are proud of our accomplishments and the milestones we have achieved. Our dedication to excellence and our commitment to providing top-notch services have earned us the trust and loyalty of our clients.
          </p>
         
        </div>
        <div className="overview-container">
          <div className="overview-card">
            <img src={clientsIcon} alt="Clients" />
            <p className="overview-count">{counts.clients}</p>
            <h5>Clients</h5>
          </div>
          <div className="overview-card">
            <img src={servicesIcon} alt="Services" />
            <p className="overview-count">{counts.services}</p>
            <h5>Services</h5>
          </div>
          <div className="overview-card">
            <img src={productsIcon} alt="Products" />
            <p className="overview-count">{counts.products}</p>
            <h5>Products</h5>
          </div>
          <div className="overview-card">
            <img src={programIcon} alt="Programs" />
            <p className="overview-count">{counts.programs}</p>
            <h5>Programs</h5>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Overview;