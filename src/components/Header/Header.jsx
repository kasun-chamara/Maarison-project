import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false); // Manage the state of the hamburger menu
  const [isVisible, setIsVisible] = useState(true); // Manage the visibility of the navbar

  // Function to close the hamburger menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false); // Close the hamburger menu
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos < 10 || currentScrollPos < window.prevScrollPos;
    setIsVisible(visible);
    window.prevScrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`custom-navbar ${isVisible ? "visible" : "hidden"}`} expanded={isOpen}>
      <Container className="navbar-container">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Hamburger Menu for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setOpen(!isOpen)} />

        {/* Full Menu Section */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Middle Section: Navigation Links */}
          <Nav className="ml-auto nav-links">
            <Nav.Link as={Link} to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className={`nav-link ${location.pathname === "/products" ? "active" : ""}`} onClick={handleLinkClick}>
              Products
            </Nav.Link>
          </Nav>

          {/* Call Me Button */}
          <Nav className="ml-auto call-me-button">
            <a href="https://wa.me/94770160161" className="button" target="_blank" rel="noopener noreferrer">
              Call Me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;