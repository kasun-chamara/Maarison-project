import React, { useEffect } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  useEffect(() => {
    // Collapse the navbar when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white custom-navbar">
      <div className="container-fluid mx-3">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#programs">
                Programs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">
                Events
              </a>
            </li>
          </ul>
          <div className="bell-icon me-3">
            <i className="fas fa-bell"></i>
          </div>
          <form className="d-flex align-items-center me-3 search-form">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="submit" className="btn3 btn-light search-btn1">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="d-flex">
            <button className="btn1 me-2">Login</button>
            <button className="btn btn2">Signup</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
