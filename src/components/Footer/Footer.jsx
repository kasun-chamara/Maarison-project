import React from 'react';
import './Footer.css'; // Ensure the CSS file is correctly imported
import logo from '../../assets/images/logo.png'; // Replace with your logo path
import { FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decorative Background */}
      <div className="footer-bg"></div>

      <div className="footer-content">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <img src={logo} alt="Astrology Logo" className="footer-logo" />
              <p className="footer-description">
                Explore the stars and discover your destiny with our astrology services. Unlock the secrets of the universe through celestial guidance.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#horoscopes">Horoscopes</a></li>
                <li><a href="#tarot">Tarot Readings</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <h5>Contact Us</h5>
              <p>Email: <a href="">info@astrology.com</a></p>
              <p>Phone: +123 456 7890</p>
              <p>Location: 123 Cosmic Road, Celestial City</p>
            </div>

            {/* Social Media */}
            <div className="col-lg-3 col-md-6">
    <h5>Follow the Stars</h5>
    <ul className="social-icons">
        <li>
            <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
            </a>
        </li>
        <li>
            <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
            </a>
        </li>
        <li>
            <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
            </a>
        </li>
        <li>
            <a href="https://whatsapp.com" aria-label="WhatsApp">
                <FaWhatsapp />
            </a>
        </li>
        <li>
            <a href="https://youtube.com" aria-label="YouTube">
                <FaYoutube />
            </a>
        </li>
    </ul>
    <button className="meet-button">Meet Marison Acharya</button>
</div>

          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} Astrology Wisdom. Guided by the stars.</p>
      </div>
    </footer>
  );
};

export default Footer;
