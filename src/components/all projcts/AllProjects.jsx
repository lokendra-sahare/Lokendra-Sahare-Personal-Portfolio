import React, { useState } from "react";
import "./allprojects.scss";
import { ProjectsData } from "../projectsData/ProjectsData";

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter projects based on search input
  const filteredProjects = ProjectsData.filter((project) => {
    const search = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(search) ||
      project.desc.toLowerCase().includes(search) ||
      project.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  return (
    <div className="container">
      <div className="search-container">
        <div className="heading">
          <h1>Find All The Projects</h1>
          <p>
            Quickly find projects by filtering through titles, descriptions, and
            tags.
          </p>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search input
          />
          <i className="fa-solid fa-magnifying-glass fa-fw"></i>
        </div>
        <div className="tags">
          <span>
            <i className="fa-solid fa-tag"></i> HTML
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> CSS
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> JavaScript
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> React.JS
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> Node.JS
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> Express.JS
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> MongoDB
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> TailwindCSS
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> Front-End
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> Back-End
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> MERN
          </span>
          <span>
            <i className="fa-solid fa-tag"></i> Full Stack
          </span>
        </div>
      </div>

      <div className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="projects-content" key={project.id}>
              <div className="imgContainer">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-description">
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="button-wrapper">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn outline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn fill"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
