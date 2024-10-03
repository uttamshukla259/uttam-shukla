import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css"; // Create a CSS file to style this component

// Updated project data with Weather App
const projectData = [
  {
    id: "0",
    name: "Employee Management System",
    description:
      "The Employee Management System is a web-based platform built with React, Node.js, and MongoDB that allows companies to efficiently manage employee details, track performance, and store relevant data. It includes features for adding, updating, and removing employee information, and displaying the list of employees in a structured format.",
    features: [
      "Add, Edit, and Delete employee details",
      "View all employees with search and filtering options",
      "Responsive and user-friendly interface",
      "Secure authentication and role-based access control",
      "Integrated with MongoDB for data persistence",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "CSS",
      "HTML",
      "JavaScript",
    ],
    github: "https://github.com/uttam/employee-management", // Replace with actual GitHub link
    live: "https://66f38ca205cf09a909d03def--willowy-faun-98c1f6.netlify.app/",
  },
  {
    id: "1",
    name: "Weather App",
    description:
      "This app gives you exact weather details by entering the city name. It was built using HTML, CSS, and JavaScript with Font Awesome icons for UI elements.",
    features: [
      "Real-time weather details by city name",
      "Simple and intuitive user interface",
      "Uses public weather API for live data",
      "Font Awesome icons for weather conditions",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    github: "https://github.com/uttam/weather-app", // Replace with actual GitHub link
    live: "https://dancing-swan-c11276.netlify.app/",
  },
];

const ProjectDetail = () => {
  const { id } = useParams(); 
  const project = projectData.find((p) => p.id === id); 

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <h2>Key Features</h2>
      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h2>Tech Stack</h2>
      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>

      <div className="links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View on GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
