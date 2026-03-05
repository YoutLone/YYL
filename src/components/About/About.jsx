import React from "react";
import "../About/About.css";
import Html5 from "../../../public/Logos/html.png";
import Css3 from "../../../public/Logos/css.png";
import Javascript from "../../../public/Logos/javascript.png";
import Git from "../../../public/Logos/git.png";
import Github from "../../../public/Logos/github.png";
import Npm from "../../../public/Logos/npm.png";
import Sass from "../../../public/Logos/sass.png";
import Vite from "../../../public/Logos/vite.png";
import Tailwind from "../../../public/Logos/tailwind.png";
import Reacts from "../../../public/Logos/react.png";
import Bootstrap from "../../../public/Logos/bootstrap.png";
import Netlify from "../../../public/Logos/netlify.png";
import Ruby from "../../../public/Logos/ruby.png";
import Python from "../../../public/Logos/python.jpg";
import Django from "../../../public/Logos/django.jpg";
import Mysql from "../../../public/Logos/mysql.png";
import Postgresql from "../../../public/Logos/postgresql.jpg";
import Rails from "../../../public/Logos/rails.png";
import Vscode from "../../../public/Logos/vscode.png";
import Terminal from "../../../public/Logos/terminal.png";
import Docker from "../../../public/Logos/docker.jpg";
import Figma from "../../../public/Logos/figma.jpg";
import AnimateOnScroll from "react-animate-on-scroll";

function About() {
  return (
    <>
      <div className="about"></div>
      <section id="about" className="about_container section">
        <AnimateOnScroll animateIn="about_title">
          <p className="about_title">About Me</p>
        </AnimateOnScroll>


        <div className="cards_container">
          <AnimateOnScroll animateIn="about_box" className="card_container about_intro">
            <section>
              <div className="terminal_card">
                <div className="terminal_header">
                  <div className="terminal_dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p className="terminal_title">backend_profile.sh</p>
                </div>
                <div className="terminal_body">
                  <p className="terminal_line">
                    <span className="terminal_prompt">$</span> role --current
                  </p>
                  <p className="terminal_line terminal_output typed_line typed_1">Backend Developer (3+ years)</p>
                  <p className="terminal_line">
                    <span className="terminal_prompt">$</span> stack --core
                  </p>
                  <p className="terminal_line terminal_output typed_line typed_2">Python | Django | PostgreSQL | Celery</p>
                  <p className="terminal_line">
                    <span className="terminal_prompt">$</span> focus --areas
                  </p>
                  <p className="terminal_line terminal_output typed_line typed_3">API Design | Integrations | Automation | Reliability</p>
                  <p className="terminal_line">
                    <span className="terminal_prompt">$</span> project --active
                  </p>
                  <p className="terminal_line terminal_output typed_line typed_4">SmartPost AI (AI Marketing Automation Platform)</p>
                </div>
              </div>

              <p className="about_summary">
                I build scalable backend systems with Python and Django, focusing on dependable APIs and production
                workflows. My recent work includes SmartPost AI, integrating Dify and Facebook Graph API for
                content generation, scheduling, and analytics automation.
              </p>

              <div className="red_container">
                <a href="https://github.com/YoutLone" target='_blank'className="social-icon github">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/thanmyohtet" target='_blank' className="social-icon linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>

              <div className="skills"></div>
            </section>
          </AnimateOnScroll>

          <section className="focus_grid">
            <div className="focus_card">
              <p className="focus_label">Backend Architecture</p>
              <p>Designing clean, scalable services with solid data models and dependable APIs.</p>
            </div>
            <div className="focus_card">
              <p className="focus_label">Workflow Automation</p>
              <p>Streamlining operations with background jobs, notifications, and event-driven systems.</p>
            </div>
            <div className="focus_card">
              <p className="focus_label">Performance & Reliability</p>
              <p>Optimizing queries, caching hot paths, and deploying monitoring-ready services.</p>
            </div>
          </section>

          <section className="backend_specialization">
            <article className="specialization_block">
              <p className="specialization_title">Backend Specialization</p>
              <div className="specialization_tags">
                <span>REST API Design</span>
                <span>Async Task Processing</span>
                <span>AI Content Pipelines</span>
                <span>Database Performance</span>
                <span>Third-party API Integrations</span>
                <span>Production Monitoring</span>
              </div>
            </article>
            <article className="specialization_block">
              <p className="specialization_title">SmartPost AI Technical Scope</p>
              <ul className="specialization_list">
                <li>AI-driven content generation with Dify and OpenAI API orchestration.</li>
                <li>Automated publishing flow via Facebook Graph API with scheduling logic.</li>
                <li>RAG-based retrieval layer with LangChain and ChromaDB for historical reuse.</li>
                <li>Performance analytics and scoring service for campaign optimization.</li>
              </ul>
            </article>
          </section>

          <AnimateOnScroll animateIn="skills_title">
            <p id="skills" className="about_title2">Skills</p>
          </AnimateOnScroll>
          <section className="card_container-general">
            <AnimateOnScroll
              animateIn="skills_backend"
              className="card_container"
            >
              <section>
                <p className="about_title3">BackEnd</p>

                <div className="card_tecnology">
                  <img src={Ruby} alt="" className="grid_item" />
                  <img src={Python} alt="" className="grid_item" />
                  <img src={Django} alt="" className="grid_item" />
                  <img src={Mysql} alt="" className="grid_item" />
                  <img src={Postgresql} alt="" className="grid_item" />
                  <img src={Rails} alt="" className="grid_item" />
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll
              animateIn="skills_frontend"
              className="card_container"
            >
              <section>
                <p className="about_title3">FrontEnd</p>

                <div className="card_tecnology">
                  <img src={Html5} alt="" className="grid_item" />
                  <img src={Css3} alt="" className="grid_item" />
                  <img src={Javascript} alt="" className="grid_item" />
                  <img src={Npm} alt="" className="grid_item" />
                  <img src={Sass} alt="" className="grid_item" />

                  <img src={Reacts} alt="" className="grid_item" />
                  <img src={Tailwind} alt="" className="grid_item" />
                  <img src={Bootstrap} alt="" className="grid_item" />
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll
              animateIn="skills_tools"
              className="card_container"
            >
              <section>
                <p className="about_title3">Tools</p>

                <div className="card_tecnology">
                  <img src={Netlify} alt="" className="grid_item" />
                  <img src={Github} alt="" className="grid_item" />
                  <img src={Git} alt="" className="grid_item" />
                  <img src={Vite} alt="" className="grid_item" />
                  <img src={Vscode} alt="" className="grid_item" />
                  <img src={Terminal} alt="" className="grid_item" />
                  <img src={Docker} alt="" className="grid_item" />
                  <img src={Figma} alt="" className="grid_item" />
                </div>
              </section>
            </AnimateOnScroll>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
