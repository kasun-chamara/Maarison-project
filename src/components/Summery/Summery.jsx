import React from "react";
import "./Summery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faStar, faFire, faLeaf, faGem, faGlobe } from "@fortawesome/free-solid-svg-icons";

const AstrologyFeedbackSection = () => {
  const wordsWithIcons = [
    { icon: faSun, word: "Sun" },
    { icon: faMoon, word: "Moon" },
    { icon: faStar, word: "Stars" },
    { icon: faFire, word: "Fire" },
    { icon: faLeaf, word: "Earth" },
    { icon: faGem, word: "Mystic" },
    { icon: faGlobe, word: "Universe" },
  ];

  return (
    <div className="user-feedback-section">
      <div className="moving-text">
        {wordsWithIcons.map((item, index) => (
          <div className="icon-word-pair" key={index}>
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <span>{item.word}</span>
          </div>
        ))}
        {wordsWithIcons.map((item, index) => (
          <div className="icon-word-pair" key={`dup-${index}`}>
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <span>{item.word}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstrologyFeedbackSection;
