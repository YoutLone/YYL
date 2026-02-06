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
            <span className="chip">Available for backend roles</span>
            <span className="chip">Based in Myanmar</span>
          </div>
          <p className="hero_title">Hi, I&apos;m Than Myo Htet</p>
          <h1 className="hero_title2">
            Backend Developer crafting scalable systems and delightful product experiences.
          </h1>
          <Typed
            className="hero_title3"
            strings={["Python & Django Specialist", "Full-Stack Web Developer"]}
            typeSpeed={50}
            backSpeed={100}
            loop
          />
          <p className="hero_support">
            I build reliable backend services, modern web apps, and data-driven tools with a focus on clean
            architecture and user impact.
          </p>
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
