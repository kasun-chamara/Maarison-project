import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faStar, faFire, faBolt, faGem, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './FallingIcons.css';

const FallingIcons = () => {
  const icons = [faSun, faMoon, faStar, faFire, faBolt, faGem, faGlobe];
  const [iconElements, setIconElements] = useState([]);

  useEffect(() => {
    const generateIcons = () => {
      const elements = [];
      for (let i = 0; i < 10; i++) { // Adjust the number of falling icons
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const randomLeft = Math.random() * 100; // Random horizontal position (0% to 100%)
        const randomDelay = Math.random() * 5; // Random delay (0 to 5 seconds)
        const randomDuration = Math.random() * 3 + 9; // Random duration (3 to 6 seconds)

        elements.push(
          <FontAwesomeIcon
            icon={randomIcon}
            key={i}
            className="falling-icon"
            style={{
              left: `${randomLeft}%`,
              animationDelay: `${randomDelay}s`,
              animationDuration: `${randomDuration}s`,
            }}
          />
        );
      }
      setIconElements(elements);
    };

    generateIcons();
  }, []);

  return <div className="falling-icons-container">{iconElements}</div>;
};

export default FallingIcons;
