import React from 'react';
import './Footer.css';
import logo from '../../assets/images/astrology.png';
import { FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decorative Overlay */}
      <div className="footer-overlay"></div>

      {/* Footer Content */}
      <div className="container footer-container">
        <div className="row footer-row">
          {/* Column 1: Company Info */}
          <div className="footer-col">
            <img src={logo} alt="Astrology Logo" className="footer-logo" />
            <p className="footer-description">
              Discover your destiny with astrology. Let the stars guide you to a brighter future with our trusted services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#horoscopes">Horoscopes</a></li>
              <li><a href="#tarot">Tarot Readings</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <ul className="contact-info">
              <li>Email: <a href="mailto:info@astrology.com">info@astrology.com</a></li>
              <li>Phone: +123 456 7890</li>
              <li>123 Cosmic Road, Celestial City</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="footer-col">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com"><FaFacebook /></a>
              <a href="https://twitter.com"><FaTwitter /></a>
              <a href="https://instagram.com"><FaInstagram /></a>
              <a href="https://whatsapp.com"><FaWhatsapp /></a>
              <a href="https://youtube.com"><FaYoutube /></a>
            </div>
            <button className="btn-meet">Meet Marison Acharya</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Astrology Wisdom | Designed by the Stars</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
