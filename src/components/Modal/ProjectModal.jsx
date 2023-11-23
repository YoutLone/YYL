import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
    const techTextColors = ["#00cc00", "#ff3333", "#3399ff", "#f5b70c"]
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} className="project-image" />
        <p>{project.description}</p>
        <p>
        <span className="built">Built With:</span>{" "}
          {project.technology.map((tech, index) => (
            <span key={index} className="tech-tag" style={{ color: techTextColors[index % techTextColors.length] }}>
              #{tech}
            </span>
          ))}
        </p>
        <div className="modal-buttons">
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
