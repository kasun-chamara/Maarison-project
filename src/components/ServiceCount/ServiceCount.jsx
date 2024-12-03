import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './ServiceCount.css';

const ServiceCount = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    services: 0,
    projects: 0,
    events: 0,
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      const targetCounts = {
        clients: 500,
        services: 100,
        projects: 50,
        events: 30,
      };

      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = { ...prev };
          let allDone = true;

          for (const key in newCounts) {
            if (newCounts[key] < targetCounts[key]) {
              newCounts[key] += 1; // Increment the number
              allDone = false;
            }
          }

          if (allDone) clearInterval(interval); // Stop when all targets are reached
          return newCounts;
        });
      }, 10); // Adjust speed of increment
    }
  }, [inView]);

  return (
    <div ref={ref} className="service-count-container">
      <div className="service-count">
        <div className="service-item">
          <h2>{counts.clients}</h2>
          <p>Clients</p>
        </div>
        <div className="service-item">
          <h2>{counts.services}</h2>
          <p>Services</p>
        </div>
        <div className="service-item">
          <h2>{counts.projects}</h2>
          <p>Projects</p>
        </div>
        <div className="service-item">
          <h2>{counts.events}</h2>
          <p>Events</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCount;
