import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const location = useLocation(); // Get the current route

  useEffect(() => {
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
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active-link" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/services" ? "active-link" : ""
                }`}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/products" ? "active-link" : ""
                }`}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/programs" ? "active-link" : ""
                }`}
                to="/programs"
              >
                Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/events" ? "active-link" : ""
                }`}
                to="/events"
              >
                Events
              </Link>
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
