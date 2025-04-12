// src/pages/Projects.js
import React, { useState } from "react";
import "./Projects.css";

const projectData = [
  { id: 1, category: "Logo", image: "/images/logo1.png", title: "Animal Shelter" },
  { id: 2, category: "Flyer", image: "/images/flyer1.png", title: "CBD Product" },
  { id: 3, category: "Logo", image: "/images/logo2.png", title: "Suplo Store" },
  { id: 4, category: "Posts", image: "/images/post1.png", title: "Coffee Inspiration" },
];

const categories = ["All", "Logo", "Flyer", "Posts"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectData
    : projectData.filter(p => p.category === activeCategory);

  return (
    <div className="projects-container">
      <h1>PORTFOLIO</h1>
      <div className="category-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>

      <div className="see-more">
        <a href="#">See more &rarr;</a>
      </div>
    </div>
  );
}

export default Projects;
