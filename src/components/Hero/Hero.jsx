import React from "react";
import "../Hero/Hero.css";
import Typed from "react-typed";
import { Link as ScrollLink } from "react-scroll";


function Hero() {
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1upLSGK2IQqyjZ58slMh-5A7XmiVdBzRN/view?usp=sharing", "_blank");
  };
  return (
    <>
      <main id="hero" className="hero">
        <section className="hero_container section">
          <div className="hero_layout">
            <div className="hero_content">
              <div className="hero_badges">
                <span className="chip">Backend Engineer</span>
                <span className="chip">Python • Django • Celery</span>
                <span className="chip">API + AI Workflow Integration</span>
              </div>
              <p className="hero_title">Hi, I&apos;m Than Myo Htet</p>
              <h1 className="hero_title2">
                I design and ship reliable backend platforms for product, automation, and AI-powered workflows.
              </h1>
              <Typed
                className="hero_title3"
                strings={["Distributed Backend Systems", "API Automation and Integrations", "Data and AI Workflow Builder"]}
                typeSpeed={50}
                backSpeed={100}
                loop
              />
              <p className="hero_support">
                Focused on scalable architecture, robust APIs, background processing, and operational stability in
                production environments.
              </p>
              <div className="hero_stats">
                <div>
                  <span>2+</span>
                  Years backend experience
                </div>
                <div>
                  <span>3+</span>
                  Production-grade systems
                </div>
                <div>
                  <span>10+</span>
                  Backend features shipped
                </div>
              </div>
            </div>
            <aside className="hero_panel">
              <p className="hero_panel_title">System Profile</p>
              <ul className="hero_panel_list">
                <li><span>Core Stack</span> Python, Django, Celery, PostgreSQL</li>
                <li><span>AI Stack</span> Dify, OpenAI API, LangChain, ChromaDB</li>
                <li><span>Integrations</span> Facebook Graph API, automation pipelines</li>
                <li><span>Focus</span> Reliability, async jobs, analytics workflows</li>
              </ul>
              <div className="hero_panel_footer">
                <code>status: actively_building(SmartPost AI)</code>
              </div>
            </aside>
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
