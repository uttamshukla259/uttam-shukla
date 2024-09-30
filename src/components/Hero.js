import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="center-text hero-title"
      >
        Hi 👋, I'm Uttam Shukla
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="center-text hero-description"
      >
        Full-Stack Developer | Passionate about Web Development
      </motion.h3>

      <div className="right-image">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          alt="coding"
          width="400"
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="left-text"
      >
        <img
          src="https://komarev.com/ghpvc/?username=uttamshukla259&label=Profile%20views&color=0e75b6&style=flat"
          alt="Profile Views"
        />
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ul className="button-list">
          <li>
            <a href="#projects" className="btn">
              Projects
            </a>
          </li>
          <li>
            <a href="#techstack" className="btn">
              Tech Stack
            </a>
          </li>
          <li>
            <a href="#resume" className="btn">
              Download Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="btn">
              Contact
            </a>
          </li>
        </ul>
      </motion.div>

      <div className="content">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          👨‍💻 All of my projects are available at
          <a
            href="https://github.com/uttamshukla259?tab=repositories"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Repositories
          </a>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          📫 How to reach me:
          <a
            href="https://www.linkedin.com/in/uttam-shukla-04156b237/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.p>
      </div>

      <div className="stats">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=uttamshukla259&show_icons=true&locale=en&layout=compact"
          alt="Top Languages"
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=uttamshukla259&show_icons=true&locale=en"
          alt="GitHub Stats"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=uttamshukla259"
          alt="GitHub Streak Stats"
        />
      </div>
    </section>
  );
};

export default Hero;
