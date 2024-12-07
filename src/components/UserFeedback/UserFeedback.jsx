import React from "react";
import "./UserFeedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faSmile, faThumbsUp, faUsers, faCheckCircle, faHandshake, faClock, faTrophy, faBolt, faGem, faGlobe } from "@fortawesome/free-solid-svg-icons";

const UserFeedbackSection = () => {
  const wordsWithIcons = [
    { icon: faStar, word: "Quality" },
    { icon: faHeart, word: "Passion" },
    { icon: faSmile, word: "Happiness" },
    { icon: faThumbsUp, word: "Trust" },
    { icon: faUsers, word: "Teamwork" },
    { icon: faCheckCircle, word: "Success" },
    { icon: faHandshake, word: "Commitment" },
    { icon: faClock, word: "Timely" },
    { icon: faTrophy, word: "Excellence" },
    { icon: faBolt, word: "Efficiency" },
    { icon: faGem, word: "Innovation" },
    { icon: faGlobe, word: "Global" },
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
        {/* Duplicate for continuous scrolling */}
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

export default UserFeedbackSection;
