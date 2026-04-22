import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../public/Logos/logo.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // GOW theme is always dark — still allow toggling for accessibility
    document.documentElement.removeAttribute("data-theme");
    setTheme("dark");
  }, []);

  const handleNavToggle = () => setIsNavOpen((v) => !v);
  const closeNav = () => setIsNavOpen(false);

  const links = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "project", label: "Projects" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      <header>
        <nav className={`site_nav ${isNavOpen ? "navbar-open" : ""}`}>
          <div className="nav_inner">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Than Myo Htet logo" className="my_logo" />
            </a>

            <button
              className="nav_toggle"
              type="button"
              onClick={handleNavToggle}
              aria-label="Toggle navigation"
            >
              <span className="nav_toggle_icon">
                <i className={`bi ${isNavOpen ? "bi-x-lg" : "bi-justify"}`}></i>
              </span>
            </button>

            <div className={`navbar-collapse ${isNavOpen ? "show" : ""}`}>
              <ul className="nav_links">
                {links.map(({ to, label }) => (
                  <li key={to} className="nav-item">
                    <ScrollLink
                      to={to}
                      smooth={true}
                      ignoreCancelEvents={true}
                      className="nav_link"
                      onClick={closeNav}
                    >
                      {label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {isNavOpen && (
        <button
          type="button"
          className="nav_backdrop"
          aria-label="Close menu"
          onClick={closeNav}
          style={{
            position: "fixed", inset: 0,
            background: "transparent", border: "none", zIndex: 40
          }}
        />
      )}
    </>
  );
}

export default Navbar;
