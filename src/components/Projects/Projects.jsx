import React, { useState } from "react";
import "../Projects/Projects.css";
import Yacht from "../../../public/pages_images/yacht.png";
import Movie from "../../../public/pages_images/movie.png";
import Space from "../../../public/pages_images/space.png";
import Magician from "../../../public/pages_images/magician.png";
import Food from "../../../public/pages_images/food.png"
import Book from '../../../public/pages_images/book.png'
import AnimateOnScroll from "react-animate-on-scroll";
import ProjectModal from "../Modal/ProjectModal";

const projects = [
  {
    id: 1,
    name: 'Yacht Rental App',
    description:
    'Yacht Rental is the react client of a full stack yacht reservation web application built on the rails API.The main function of the app is to allow users to book reservations for renting a yacht.',
    technology: ['React', 'CSS', 'Ruby on Rails', 'Tailwind'],
    image: Yacht,
    link: 'https://github.com/YoutLone/yacht_rental_front_end.git',
    liveDemo: 'https://beta-yacht-rental.netlify.app/',
  },
  {
    id: 2,
    name: 'MovieVerse',
    description:
      'This application, known as the MovieVerse, is developed as part of the Microverse REACT-REDUX capstone project.Its primary function is to serve as a TV show database, with all shows being sourced from an API.',
    technology: ['HTML', 'CSS', 'Redux', 'React'],
    image: Movie,
    link: 'https://github.com/YoutLone/MovieVerse.git',
    liveDemo: 'https://movieverse-rzc1.onrender.com/',
  },
  {
    id: 3,
    name: 'Space Travellers App',
    description:
      'Space Travellers application developed by using REACT. The app serves as a platform for reserving rockets and joining missions, offering a diverse range of functionalities through API calls.',
    technology: ['HTML', 'CSS', 'Redux', 'React'],
    image: Space,
    link: 'https://github.com/YoutLone/space-travellers-hub.git',
    liveDemo: 'https://space-travellers-hub-uw83.onrender.com/',
  },
  {
    id: 4,
    name: 'Math-Magicians',
    description:
      'Math-Magicians is a website for all fans of mathematics.It serves as a Single Page Application (SPA) enabling users to perform basic mathematical computations and explore random quotes relative to mathematics.',
    technology: ['HTML', 'JavaScript', 'CSS', 'React'],
    image: Magician,
    link: 'https://github.com/YoutLone/math-magicians.git',
    liveDemo: 'https://math-magicians-5nkr.onrender.com/',
  },
  {
    id: 5,
    name: 'Book-Store',
    description:
     'Book Store is a straightfoward application developed with React that enables you to add and remove books.To add a book, simply provide the book\'s name and author, and then press the enter key or click the submit button to add it.',
    technology: ['HTML', 'JavaScript', 'CSS', 'React'],
    image: Book,
    link: 'https://github.com/YoutLone/Book-Store.git',
    liveDemo: 'https://resonant-moxie-c67946.netlify.app/',
  },
  {
    id: 6,
    name: 'Gyi Gyi Paw - Restaurant',
    description:
     'This website is the outcome of the initial Capstone Project undertaken during the Microverse Program. This is the Restaurant Website to know the information and booking for their table.',
    technology: ['HTML', 'JavaScript', 'CSS'],
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
        <p className="project_title">Projects</p>
      </AnimateOnScroll>
      <section className="project_container_general">
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
                <img src={project.image} alt={project.name} />
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