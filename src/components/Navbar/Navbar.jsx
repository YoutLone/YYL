import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../public/Logos/logo.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("gow-theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", initialTheme);
    setTheme(initialTheme);
  }, []);

  const handleNavToggle = () => setIsNavOpen((v) => !v);
  const closeNav = () => setIsNavOpen(false);
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("gow-theme", nextTheme);
  };

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
                <li className="nav-item">
                  <button
                    type="button"
                    className="theme_toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                    <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
                  </button>
                </li>
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
