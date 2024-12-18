import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react"; // Import Hamburger component
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false); // Manage the state of the hamburger menu

  // Function to close the hamburger menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false); // Close the hamburger menu
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <Link
              className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`}
              to="/"
              onClick={handleLinkClick} // Close the menu when clicked
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${location.pathname === "/services" ? "active-link" : ""}`}
              to="/services"
              onClick={handleLinkClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${location.pathname === "/products" ? "active-link" : ""}`}
              to="/products"
              onClick={handleLinkClick} // Close the menu when clicked
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${location.pathname === "/programs" ? "active-link" : ""}`}
              to="/programs"
              onClick={handleLinkClick} // Close the menu when clicked
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${location.pathname === "/events" ? "active-link" : ""}`}
              to="/events"
              onClick={handleLinkClick} // Close the menu when clicked
            >
              Events
            </Link>
          </li>
        </ul>

        {/* Search and Notification */}
        <div className="extras">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <span className="search-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="notification-icon">
            <i className="fas fa-bell"></i>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-container">
          <Hamburger toggled={isOpen} toggle={setOpen} /> {/* Hamburger component */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
