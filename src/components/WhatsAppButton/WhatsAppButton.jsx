import React from "react";
import "./WhatsAppButton.css";
import whatsappIcon from "../../assets/images/Whatsapp.png"; // Add a WhatsApp icon image to your assets

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber" // Replace 'yourphonenumber' with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
