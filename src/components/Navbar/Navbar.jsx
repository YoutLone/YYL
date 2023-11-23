import React, { useState } from "react";
import "../Navbar/Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
<header>
        <nav className={`navbar navbar-expand-sm ${isNavOpen ? 'navbar-open' : ''}`} id="nav_general">
          <div className="container-fluid">
            <a className="navbar-brand" id="nav_logo" href="#">
              TM HTET
            </a>
            <button
              className="navbar-toggler"
              id="btn_nav"
              type="button"
              onClick={handleNavToggle}
              aria-controls="navbarNav"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
            >
              <span id="btn_icon"><i className="bi bi-justify"></i></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <ScrollLink
                    to="hero"
                    smooth={true}
                    ignoreCancelEvents={true}
                    className="nav-link"
                    id="links_nav"
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
                    className="nav-link"
                    id="links_nav"
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
                    className="nav-link"
                    id="links_nav"
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
                    className="nav-link"
                    id="links_nav"
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
                    className="nav-link"
                    id="links_nav"
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
                    className="nav-link"
                    id="links_nav"
                    onClick={closeNav}
                  >
                    Contact
                  </ScrollLink>
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
