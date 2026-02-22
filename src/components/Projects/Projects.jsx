import React, { useState } from "react";
import "../Projects/Projects.css";
import USEN from "../../../public/pages_images/usen.png";
import FlyHigh from "../../../public/pages_images/flyhigh.png";
import Yacht from "../../../public/pages_images/yacht.png";
import Movie from "../../../public/pages_images/movie.png";
import Space from "../../../public/pages_images/space.png";
import Magician from "../../../public/pages_images/magician.png";
import Food from "../../../public/pages_images/food.png"
import Book from '../../../public/pages_images/book.png'
import SmartPost from '../../../public/pages_images/smartpost.png'
import AnimateOnScroll from "react-animate-on-scroll";
import ProjectModal from "../Modal/ProjectModal";

const projects = [
  {
    id: 1,
    name: 'SMARTPOST AI',
    description:'Leading the development of an AI-powered social media management platform. Implemented core features including AI-driven content generation, automated Facebook post scheduling and publishing, intelligent performance analytics with scoring, and a Retrieval-Augmented Generation (RAG) system to learn from historical post data. Built a responsive dashboard for content strategy management and customer conversation insights. (Project in Active Development)',
    technology: ['Python', 'JavaScript', 'Django', 'Dify', 'Celery', 'PostgreSQL', 'OpenAI API', 'LangChain', 'ChromaDB', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    image: SmartPost,
    link: '',
    liveDemo: '',
  },
  {
    id: 2,
    name: 'USEN NETWORK SUPPORT',
    description:'Contributed to the development of a management web application for store and user administration. Implemented key features such as store and user account management, CSV import/export for bulk data handling, contract management, and customizable store templates. Ensured efficient data handling and user authentication using Python and Django.',
    technology: ['Python', 'Django', 'Javascript','React', 'PostgreSQL','AWS'],
    role: 'Backend Engineer',
    image: USEN,
    link: '',
    liveDemo: 'http://ec2-52-195-232-232.ap-northeast-1.compute.amazonaws.com/',
  },
  {
    id: 3,
    name: 'LocaBoo',
    description:'Designed and developed a multi-user platform with four roles: admin, member, partner_admin, and partner_member. Implemented user registration with company-based access for partners, an email and notification system for real-time updates, and admin-controlled coupon management. Developed an order management system supporting three types of orders: posting, printing, and newspaper.',
    technology: ['Python', 'Django','Celery','Websocket','Javascript','React', 'PostgreSQL','AWS'],
    role: 'Backend Engineer',
    image: FlyHigh,
    link: '',
    liveDemo: 'http://staging.locaboo.jp/',
  },
  {
    id: 4,
    name: 'Yacht Rental App',
    description:
    'Yacht Rental is the react client of a full stack yacht reservation web application built on the rails API.The main function of the app is to allow users to book reservations for renting a yacht.',
    technology: ['React', 'CSS', 'Ruby on Rails', 'Tailwind'],
    role: 'Full-Stack Developer',
    image: Yacht,
    link: 'https://github.com/YoutLone/yacht_rental_front_end.git',
    liveDemo: 'https://beta-yacht-rental.netlify.app/',
  },
  {
    id: 5,
    name: 'MovieVerse',
    description:
      'This application, known as the MovieVerse, is developed as part of the Microverse REACT-REDUX capstone project.Its primary function is to serve as a TV show database, with all shows being sourced from an API.',
    technology: ['HTML', 'CSS', 'Redux', 'React'],
    role: 'Frontend Developer',
    image: Movie,
    link: 'https://github.com/YoutLone/MovieVerse.git',
    liveDemo: 'https://movieverse-rzc1.onrender.com/',
  },
  {
    id: 6,
    name: 'Space Travellers App',
    description:
      'Space Travellers application developed by using REACT. The app serves as a platform for reserving rockets and joining missions, offering a diverse range of functionalities through API calls.',
    technology: ['HTML', 'CSS', 'Redux', 'React'],
    role: 'Frontend Developer',
    image: Space,
    link: 'https://github.com/YoutLone/space-travellers-hub.git',
    liveDemo: 'https://space-travellers-hub-uw83.onrender.com/',
  },
  {
    id: 7,
    name: 'Math-Magicians',
    description:
      'Math-Magicians is a website for all fans of mathematics.It serves as a Single Page Application (SPA) enabling users to perform basic mathematical computations and explore random quotes relative to mathematics.',
    technology: ['HTML', 'JavaScript', 'CSS', 'React'],
    role: 'Frontend Developer',
    image: Magician,
    link: 'https://github.com/YoutLone/math-magicians.git',
    liveDemo: 'https://math-magicians-5nkr.onrender.com/',
  },
  {
    id: 8,
    name: 'Book-Store',
    description:
     'Book Store is a straightfoward application developed with React that enables you to add and remove books.To add a book, simply provide the book\'s name and author, and then press the enter key or click the submit button to add it.',
    technology: ['HTML', 'JavaScript', 'CSS', 'React'],
    role: 'Frontend Developer',
    image: Book,
    link: 'https://github.com/YoutLone/Book-Store.git',
    liveDemo: 'https://resonant-moxie-c67946.netlify.app/',
  },
  {
    id: 9,
    name: 'Gyi Gyi Paw - Restaurant',
    description:
     'This website is the outcome of the initial Capstone Project undertaken during the Microverse Program. This is the Restaurant Website to know the information and booking for their table.',
    technology: ['HTML', 'JavaScript', 'CSS'],
    role: 'Frontend Developer',
    image: Food,
    link: 'https://github.com/YoutLone/Capstone-Project.git',
    liveDemo: 'https://youtlone.github.io/Capstone-Project/',
  },
];


function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="project"></div>
      <AnimateOnScroll animateIn="proyect_title">
        <p id="project" className="project_title">Projects</p>
      </AnimateOnScroll>
      <section className="project_container_general section">
        <div className="projects_container">
          {projects.map((project) => (
            <AnimateOnScroll
              key={project.id}
              animateIn="proyects"
              className="project_container"
              delay={100}
            >
              <section
                className="project_card"
                onClick={() => openModal(project)}
              >
                <div className="project_media">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project_info">
                  <h3>{project.name}</h3>
                  <p className="project_role">Role: {project.role}</p>
                  <p>{project.description}</p>
                  <div className="project_tags">
                    {project.technology.slice(0, 4).map((tech, index) => (
                      <span key={index}>#{tech}</span>
                    ))}
                  </div>
                </div>
              </section>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}

export default Projects;
