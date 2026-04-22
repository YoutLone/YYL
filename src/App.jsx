import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "../src/App.css";
import GowSnow from "./components/Particles/GowSnow";
import GowFireCursor from "./components/Cursor/GowFireCursor";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      {/* Falling ash/snow — replaces tsparticles */}
      <GowSnow />

      {/* Fire cursor with ember trail */}
      <GowFireCursor />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
