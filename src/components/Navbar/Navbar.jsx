import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../public/Logos/logo.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("yyl-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("yyl-theme", nextTheme);
    setTheme(nextTheme);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-sm site_nav ${isNavOpen ? "navbar-open" : ""}`}
        >
          <div className="container-fluid nav_inner">
            <a className="navbar-brand nav_logo" href="#">
              <img src={Logo} alt="Than Myo Htet logo" className="my_logo" />
            </a>
            <button
              className="navbar-toggler nav_toggle"
              type="button"
              onClick={handleNavToggle}
              aria-controls="navbarNav"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
            >
              <span className="nav_toggle_icon">
                <i className="bi bi-justify"></i>
              </span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav nav_links">
                <li className="nav-item">
                  <ScrollLink
                    to="hero"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link nav_link"
                    aria-current="page"
                    onClick={closeNav}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link nav_link"
                    onClick={closeNav}
                  >
                    About
                  </ScrollLink>
                </li>                
                <li className="nav-item">
                  <ScrollLink
                    to="skills"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link nav_link"
                    onClick={closeNav}
                  >
                    Skills
                  </ScrollLink>
                </li>                
                <li className="nav-item">
                  <ScrollLink
                    to="project"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link nav_link"
                    onClick={closeNav}
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="testimonials"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link nav_link"
                    onClick={closeNav}
                  >
                    Testimonials
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link nav_link"
                    onClick={closeNav}
                  >
                    Contact
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="theme_toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  >
                    <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill"}`}></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
