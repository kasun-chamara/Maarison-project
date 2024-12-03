import React from 'react';
import './Footer.css'; // Ensure the CSS file is correctly imported
import logo from '../../assets/images/abc.png'; // Replace with your logo path
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa'; // Import social icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-md-3 col-sm-12">
              <img src={logo} alt="Company Logo" className="footer-logo" />
              <p className="footer-description">
                Your Company Name provides the best services to ensure customer satisfaction and excellence.
              </p>
            </div>
            {/* Contact Details */}
            <div className="col-md-3 col-sm-12">
              <h5>Contact Us</h5>
              <p>Email: contact@company.com</p>
              <p>Phone: +123 456 7890</p>
              <p>Address: 123, Main Street, City</p>
            </div>
            {/* Quick Links */}
            <div className="col-md-3 col-sm-12">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#product">Products</a></li>
                <li><a href="#program">Our Program</a></li>
              </ul>
            </div>
            {/* Social Media and Button */}
            <div className="col-md-3 col-sm-12">
              <h5>Follow Us</h5>
              <ul className="social-icons">
                <li><a href="https://facebook.com"><FaFacebook /> Facebook</a></li>
                <li><a href="https://whatsapp.com"><FaWhatsapp /> WhatsApp</a></li>
                <li><a href="https://youtube.com"><FaYoutube /> YouTube</a></li>
              </ul>
              <button className="footer-button">Meet Acharya</button>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
