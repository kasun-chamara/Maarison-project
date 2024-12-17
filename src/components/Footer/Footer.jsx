import React from 'react';
import './Footer.css'; // Ensure the CSS file is correctly imported
import logo from '../../assets/images/logo.png'; // Replace with your logo path
import { FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Name Section */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-name">Maarison's Wisdom</p> {/* Replaced description with name */}
        </div>

        {/* Quick Links and Contact Information Section */}
        <div className="footer-right">
          <div className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#horoscopes">Horoscopes</a></li>
              <li><a href="#tarot">Tarot Readings</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:info@astrology.com">info@astrology.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
            <p>Location: 123 Cosmic Road, Celestial City</p>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" className="social-icon"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
            <a href="https://whatsapp.com" aria-label="WhatsApp" className="social-icon"><FaWhatsapp /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="social-icon"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Astrology Wisdom. Guided by the stars.</p>
      </div>
    </footer>
  );
};

export default Footer;
