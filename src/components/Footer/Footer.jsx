import React from 'react';
import './Footer.css'; // Ensure the CSS file is correctly imported
import logo from '../../assets/images/Logo.png'; // Replace with your logo path
import { FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Name Section */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-name">Maarison's Wisdom</p>
          <p className="footer-description">Your trusted source for astrological insights and guidance</p>
        </div>

        {/* Contact Information Section */}
        <div className="footer-right">
          <div className="footer-contact">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:info@astrology.com">info@astrology.com</a></p>
            <p>Phone: <a href="tel:+1234567890">011 2872769</a></p>
            <p>115/A Kurunduwatta, Welikadawatta road, off nawala road, Rajagiriya, Sri Lanka</p>
          </div>

          {/* Meet Maarison Button */}
          <div className="meet-maarison">
            <a href="https://wa.me/94770160161" className="btn" target="_blank" rel="noopener noreferrer">Meet Maarison Acharya</a>
          </div>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} />
        </a>
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a> */}
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Astrology Wisdom. Guided by the stars.</p>
      </div>
    </footer>
  );
};

export default Footer;