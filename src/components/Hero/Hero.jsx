import React from "react";
import "../Hero/Hero.css";
import Typed from "react-typed";
import { Link as ScrollLink } from "react-scroll";


function Hero() {
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1-HycPYrnPkeiow13f2Qwm3eMXr7istwG/view?usp=sharing", "_blank");
  };
  return (
    <>
      <main id="hero" className="hero">
        <section className="hero_container section">
          <div className="hero_badges">
            <span className="chip">Backend Engineer</span>
            <span className="chip">Python • Django • AWS</span>
            <span className="chip">Based in Myanmar</span>
          </div>
          <p className="hero_title">Hi, I&apos;m Than Myo Htet</p>
          <h1 className="hero_title2">
            I build resilient backend systems and data-driven products that scale with confidence.
          </h1>
          <Typed
            className="hero_title3"
            strings={["Backend Systems Specialist", "API & Data Platform Builder"]}
            typeSpeed={50}
            backSpeed={100}
            loop
          />
          <p className="hero_support">
            Specializing in backend architecture, automation, and high-impact features for real-world platforms.
            I collaborate closely with product teams to ship stable, scalable systems.
          </p>
          <div className="hero_stats">
            <div>
              <span>2</span>
              Large-scale systems shipped
            </div>
            <div>
              <span>1+</span>
              Years in production delivery
            </div>
            <div>
              <span>10+</span>
              Backend-focused features
            </div>
          </div>
          <div className="hero_actions">
            <button className="primary-btn" onClick={openResume}>
              Download Resume
            </button>
            <ScrollLink
              to="contact"
              smooth={true}
              ignoreCancelEvents={true}
              className="ghost-btn hero_link"
            >
              Let&apos;s Talk
            </ScrollLink>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;
