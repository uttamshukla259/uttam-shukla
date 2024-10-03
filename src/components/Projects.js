import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Student Result Management System",
      description: `Student Result Management System (SRMS) is an application designed to manage and display the academic results of students efficiently. It simplifies the process for educators and administrators to enter and maintain student grades while offering students easy access to their performance.
      
Admin/Teacher Features:
- User authentication for secure access.
- Manage student records (create, update, delete).
- Enter and modify student grades.
- Generate report cards.
- Performance analytics (e.g., class averages, pass rates).

Student Features:
- Secure login to view personal results.
- Access grades for various subjects and exams.
- Download and print report cards.`,
      github: "https://github.com/uttamshukla259/SRMS-MERN",
      live: "https://project2.com",
    },
    {
      name: "Employee Management System",
      description:
        "A web-based employee management system built with React and Node.js to handle employee data efficiently.",
      github: "https://github.com/uttam/employee-management",
      live: "https://66f38ca205cf09a909d03def--willowy-faun-98c1f6.netlify.app/", // External link
    },
    {
      name: "Project 2",
      description: "A frontend project built with React...",
      github: "https://github.com/uttam/project2",
      live: "https://project2.com", // External link
    },
    {
      name: "Weather App",
      description:
        "A frontend project built with HTML, CSS, JS using weather API.",
      github: "https://github.com/uttamshukla259/Weather-App",
      live: "https://dancing-swan-c11276.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2 className="project1">Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            {/* External Links */}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>

            {/* Internal Navigation using <a> tags */}
            <a href={`/projects/${index}`} className="project-link">
              Details
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
