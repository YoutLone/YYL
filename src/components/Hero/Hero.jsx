import React from "react";
import "../Hero/Hero.css";
import Typed from "react-typed";


function Hero() {
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1bliEn-55eossqOd_WuF79U6__nVaY5XJ/view?usp=sharing", "_blank");
  };
  return (
    <>
      <main id="hero">
        <section className="hero_container">
          <p className="hero_title">Hello 👋</p>
          <p className="hero_title2 name">I'AM THAN MYO HTET</p>
          <Typed className="hero_title3"
          strings={[
            "Full-Stack Web Developer",
            "Responsive Web Design",
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
          />
          <button className="resume_button" onClick={openResume}>
            Get My Resume
          </button>
        </section>
      </main>
    </>
  );
}

window.addEventListener("load", Hero);

export default Hero;
